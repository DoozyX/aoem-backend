import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { CacheModule } from '@app/cache/cache.module';
import { SessionModule } from '@app/session/session.module';
import { UsersModule } from '@app/users/users.module';

import { MailModule } from '@app/mail/mail.module';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { AnonymousStrategy } from './strategies/anonymous.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    CacheModule,
    PassportModule,
    JwtModule.register({}),
    SessionModule,
    MailModule,
    forwardRef(() => UsersModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy, AnonymousStrategy],
  exports: [AuthService],
})
export class AuthModule {}
