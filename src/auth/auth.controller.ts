import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request } from 'express';

import { VerifiedGuard } from '@app/statuses';
import { User } from '@app/users';
import { ErrorResponse, NullableType } from '@app/utils';

import { AuthConfirmEmailDto } from './dto/auth-confirm-email.dto';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthForgotPasswordDto } from './dto/auth-forgot-password.dto';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';
import { AuthResetPasswordDto } from './dto/auth-reset-password.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { JwtRefreshAuthGuard } from './guard/jwt-auth.guard';
import { ValidJwtGuard } from './guard/valid-jwt.guard';
import { AuthService } from './service/auth.service';
import { JwtRefreshPayloadType } from './types/jwt-refresh-payload.type';
import {
  LoginResponseType,
  RefreshResponseType,
} from './types/login-response.type';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('email/login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Login successful', type: LoginResponseType })
  @ApiUnauthorizedResponse({
    description: 'Invalid password',
    type: () => ErrorResponse,
  })
  @ApiNotFoundResponse({
    description: 'Invalid email',
    type: () => ErrorResponse,
  })
  public login(
    @Body() loginDto: AuthEmailLoginDto,
  ): Promise<LoginResponseType> {
    return this.service.validateLogin(loginDto);
  }

  @Post('email/register')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ description: 'User registered successfully' })
  @ApiUnprocessableEntityResponse({
    description: 'Email already exists',
    type: () => ErrorResponse,
  })
  register(@Body() createUserDto: AuthRegisterLoginDto): Promise<void> {
    return this.service.register(createUserDto);
  }

  @Post('email/resend-verify-mail')
  @ApiBearerAuth()
  @UseGuards(ValidJwtGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Email sent successfully' })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid State',
    type: () => ErrorResponse,
  })
  resendVerifyMail(@Req() request: Request): Promise<void> {
    return this.service.resendVerifyEmail(request.user!);
  }

  @Post('email/confirm')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({ description: 'User confirmed successfully' })
  @ApiUnauthorizedResponse({
    description: 'Invalid token',
    type: () => ErrorResponse,
  })
  @ApiNotFoundResponse({
    description: 'Invalid user',
    type: () => ErrorResponse,
  })
  confirmEmail(@Body() confirmEmailDto: AuthConfirmEmailDto): Promise<void> {
    return this.service.confirmEmail(confirmEmailDto.hash);
  }

  @Post('forgot/password')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({ description: 'Forgot request sent successfully' })
  @ApiNotFoundResponse({
    description: 'Invalid user',
    type: () => ErrorResponse,
  })
  forgotPassword(
    @Body() forgotPasswordDto: AuthForgotPasswordDto,
  ): Promise<void> {
    return this.service.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset/password')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({ description: 'Password reset successfully' })
  @ApiUnauthorizedResponse({
    description: 'Invalid token',
    type: () => ErrorResponse,
  })
  @ApiNotFoundResponse({
    description: 'Invalid user',
    type: () => ErrorResponse,
  })
  resetPassword(@Body() resetPasswordDto: AuthResetPasswordDto): Promise<void> {
    return this.service.resetPassword(
      resetPasswordDto.hash,
      resetPasswordDto.password,
    );
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(ValidJwtGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Current user information',
    type: () => User,
  })
  public me(@Req() request: Request): Promise<NullableType<User>> {
    return this.service.me(request.user!.id);
  }

  @Post('refresh')
  @ApiBearerAuth()
  @UseGuards(JwtRefreshAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Token refreshed successfully',
    type: RefreshResponseType,
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid token',
    type: () => ErrorResponse,
  })
  public refresh(@Req() request: Request): Promise<RefreshResponseType> {
    const user = request.user as unknown as JwtRefreshPayloadType;
    return this.service.refreshToken({
      sessionId: user.sessionId,
      hash: user.hash,
    });
  }

  @Post('logout')
  @ApiBearerAuth()
  @UseGuards(ValidJwtGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({ description: 'Logout successful' })
  public async logout(@Req() request: Request): Promise<void> {
    await this.service.logout(request.user!);
  }

  @Patch('me')
  @ApiBearerAuth()
  @UseGuards(ValidJwtGuard, VerifiedGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'User information updated successfully',
    type: () => User,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Email already exists',
    type: () => ErrorResponse,
  })
  public update(
    @Req() request: Request,
    @Body() userDto: AuthUpdateDto,
  ): Promise<NullableType<User>> {
    return this.service.update(request.user!, userDto);
  }
}
