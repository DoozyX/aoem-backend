import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

import { StatusEnum } from './domain/statuses.enum';

@Injectable()
export class VerifiedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    return (
      !!request.user &&
      [
        StatusEnum.verified,
        StatusEnum.approved,
        StatusEnum.pending,
        StatusEnum.expired,
      ].includes(request.user.status)
    );
  }
}

export class ApprovedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    return !!request.user && request.user!.status == StatusEnum.approved;
  }
}
