import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT_REFRESH_STRATEGY } from '../strategies/jwt-refresh.strategy';
import { JWT_STRATEGY } from '../strategies/jwt.strategy';

@Injectable()
export class JwtAuthGuard extends AuthGuard(JWT_STRATEGY) {}

export class JwtRefreshAuthGuard extends AuthGuard(JWT_REFRESH_STRATEGY) {}
