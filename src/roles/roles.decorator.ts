import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { RoleEnum } from './domain/roles.enum';

export const Roles = (...roles: RoleEnum[]): CustomDecorator =>
  SetMetadata('roles', roles);
