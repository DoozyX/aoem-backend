import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import ms from 'ms';

import { CacheService } from '@app/cache';
import { MailService } from '@app/mail';
import { RoleEnum } from '@app/roles';
import { SessionService } from '@app/session';
import { StatusEnum } from '@app/statuses';
import { User, UsersService } from '@app/users';
import { NullableType } from '@app/utils';

import { AllConfigType } from '../../config/config.type';
import { AuthEmailLoginDto } from '../dto/auth-email-login.dto';
import { AuthRegisterLoginDto } from '../dto/auth-register-login.dto';
import { AuthUpdateDto } from '../dto/auth-update.dto';
import { JwtPayloadType } from '../types/jwt-payload.type';
import { JwtRefreshPayloadType } from '../types/jwt-refresh-payload.type';
import { LoginResponseType } from '../types/login-response.type';
import { tokenKey } from '../util';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private sessionService: SessionService,
    private mailService: MailService,
    private configService: ConfigService<AllConfigType>,
    private cacheService: CacheService,
  ) {}

  async validateLogin(loginDto: AuthEmailLoginDto): Promise<LoginResponseType> {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new NotFoundException();
    }

    if (!user.password) {
      throw new UnauthorizedException();
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    const session = await this.sessionService.create({
      userId: user.id,
      hash,
    });

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      id: user.id,
      role: user.role,
      status: user.status,
      sessionId: session.id,
      hash,
    });

    await this.saveToken(user.id, session.id, token);

    return {
      refreshToken,
      token,
      tokenExpires,
      user,
    };
  }

  async isValidToken(
    jwtPayload: JwtPayloadType,
    token: string,
  ): Promise<boolean> {
    const key = tokenKey(jwtPayload.id, jwtPayload.sessionId);
    const cacheToken = await this.cacheService.get<string>(key);

    return cacheToken === token;
  }

  async register(dto: AuthRegisterLoginDto): Promise<void> {
    const user = await this.usersService.createUser({
      ...dto,
      email: dto.email,
      role: RoleEnum.user,
      status: StatusEnum.inactive,
    });

    const hash = await this.jwtService.signAsync(
      {
        confirmEmailUserId: user.id,
      },
      {
        secret: this.configService.getOrThrow('auth.confirmEmailSecret', {
          infer: true,
        }),
        expiresIn: this.configService.getOrThrow('auth.confirmEmailExpires', {
          infer: true,
        }),
      },
    );

    this.mailService
      .userSignUp({
        lang: user.language,
        to: dto.email,
        data: {
          hash,
        },
      })
      .catch(console.error);
  }

  async resendVerifyEmail(userJwt: JwtPayloadType): Promise<void> {
    const user = (await this.usersService.findById(userJwt.id))!;

    if (user.status !== StatusEnum.inactive) {
      throw new UnprocessableEntityException();
    }

    const hash = await this.jwtService.signAsync(
      {
        confirmEmailUserId: user.id,
      },
      {
        secret: this.configService.getOrThrow('auth.confirmEmailSecret', {
          infer: true,
        }),
        expiresIn: this.configService.getOrThrow('auth.confirmEmailExpires', {
          infer: true,
        }),
      },
    );

    this.mailService
      .userSignUp({
        lang: user.language,
        to: user.email,
        data: {
          hash,
        },
      })
      .catch(console.error);
  }

  async confirmEmail(hash: string): Promise<void> {
    let userId: number;

    try {
      const jwtData = await this.jwtService.verifyAsync<{
        confirmEmailUserId: number;
      }>(hash, {
        secret: this.configService.getOrThrow('auth.confirmEmailSecret', {
          infer: true,
        }),
      });

      userId = jwtData.confirmEmailUserId;
    } catch {
      throw new UnauthorizedException();
    }

    await this.usersService.activate(null, userId, {
      status: StatusEnum.verified,
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new NotFoundException();
    }

    const tokenExpiresIn = this.configService.getOrThrow('auth.forgotExpires', {
      infer: true,
    });

    const tokenExpires = Date.now() + ms(tokenExpiresIn);

    const hash = await this.jwtService.signAsync(
      {
        forgotUserId: user.id,
      },
      {
        secret: this.configService.getOrThrow('auth.forgotSecret', {
          infer: true,
        }),
        expiresIn: tokenExpiresIn,
      },
    );

    await this.mailService.forgotPassword({
      lang: user.language,
      to: email,
      data: {
        hash,
        tokenExpires,
      },
    });
  }

  async resetPassword(hash: string, password: string): Promise<void> {
    let userId: number;

    try {
      const jwtData = await this.jwtService.verifyAsync<{
        forgotUserId: number;
      }>(hash, {
        secret: this.configService.getOrThrow('auth.forgotSecret', {
          infer: true,
        }),
      });

      userId = jwtData.forgotUserId;
    } catch {
      throw new UnauthorizedException();
    }

    const user = await this.usersService.findById(userId);

    if (!user) {
      throw new NotFoundException();
    }

    user.password = password;

    await this.sessionService.deleteByUserId(user.id);

    await this.usersService.update(null, user.id, user);
  }

  me(userId: number): Promise<NullableType<User>> {
    return this.usersService.findById(userId);
  }

  async update(
    userJwtPayload: JwtPayloadType,
    userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    if (userDto.password) {
      if (!userDto.oldPassword) {
        throw new UnprocessableEntityException();
      }

      const currentUser = await this.usersService.findById(userJwtPayload.id);

      if (!currentUser) {
        throw new NotFoundException();
      }

      if (!currentUser.password) {
        throw new UnprocessableEntityException();
      }

      const isValidOldPassword = await bcrypt.compare(
        userDto.oldPassword,
        currentUser.password,
      );

      if (!isValidOldPassword) {
        throw new UnprocessableEntityException();
      } else {
        await this.sessionService.deleteByUserIdWithExclude(
          currentUser.id,
          userJwtPayload.sessionId,
        );
      }
    }

    return await this.usersService.update(null, userJwtPayload.id, userDto);
  }

  async refreshToken(
    data: Pick<JwtRefreshPayloadType, 'sessionId' | 'hash'>,
  ): Promise<Omit<LoginResponseType, 'user'>> {
    const session = await this.sessionService.findById(data.sessionId);

    if (!session) {
      throw new UnauthorizedException();
    }

    if (session.hash !== data.hash) {
      throw new UnauthorizedException();
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    const user = await this.usersService.findById(session.userId);

    if (!user?.role) {
      throw new UnauthorizedException();
    }

    await this.sessionService.update(session.id, {
      hash,
    });

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      id: session.userId,
      role: user.role,
      status: user.status,
      sessionId: session.id,
      hash,
    });

    await this.saveToken(session.userId, session.id, token);

    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }

  async logout(data: JwtPayloadType): Promise<void> {
    await this.cacheService.del(tokenKey(data.id, data.sessionId));
    return this.sessionService.deleteById(data.sessionId);
  }

  private async getTokensData(data: {
    id: number;
    role: RoleEnum;
    status: StatusEnum;
    sessionId: number;
    hash: string;
  }): Promise<Omit<LoginResponseType, 'user'>> {
    const tokenExpiresIn = this.getTokenExpires();

    const tokenExpires = Date.now() + ms(tokenExpiresIn);

    const jwtPayload: Omit<JwtPayloadType | 'iat', 'exp'> = {
      id: data.id,
      role: data.role,
      status: data.status,
      sessionId: data.sessionId,
    };
    const [token, refreshToken] = await Promise.all([
      await this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.getOrThrow('auth.secret', { infer: true }),
        expiresIn: tokenExpiresIn,
      }),
      await this.jwtService.signAsync(
        {
          sessionId: data.sessionId,
          hash: data.hash,
        },
        {
          secret: this.configService.getOrThrow('auth.refreshSecret', {
            infer: true,
          }),
          expiresIn: this.configService.getOrThrow('auth.refreshExpires', {
            infer: true,
          }),
        },
      ),
    ]);

    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }

  private getTokenExpires(): string {
    return this.configService.getOrThrow('auth.expires', {
      infer: true,
    });
  }

  private async saveToken(
    userId: number,
    sessionId: number,
    token: string,
  ): Promise<void> {
    const key = tokenKey(userId, sessionId);
    const ttl = this.getTokenExpires();
    await this.cacheService.set(key, token, ms(ttl));
  }
}
