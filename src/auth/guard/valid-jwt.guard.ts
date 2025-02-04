import {
  ExecutionContext,
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

import { AuthService } from '../service/auth.service';
import { getJwtToken } from '../util';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class ValidJwtGuard extends JwtAuthGuard {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (!(await super.canActivate(context))) {
      return false;
    }
    const request = this.getRequest(context) as Request;
    const user = request.user;
    if (!user) {
      return false;
    }

    const token = getJwtToken(request);
    if (!token) {
      return false;
    }

    const isValid = await this.authService.isValidToken(user, token);
    if (!isValid) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
