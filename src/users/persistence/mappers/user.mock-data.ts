import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { enumToId } from '@app/utils';

import { LanguageEnum } from '@app/i18n';
import { UserEntity, User } from '@app/users';

const date = new Date();

export function mockUserEntity(): UserEntity {
  const entity = new UserEntity();

  entity.id = 1;
  entity.email = 'user@doozyx.com';
  entity.roleId = enumToId(RoleEnum, RoleEnum.user);
  entity.statusId = enumToId(StatusEnum, StatusEnum.approved);

  entity.statusReason = null;
  entity.password = 'password';
  entity.previousPassword = 'password';

  entity.language = LanguageEnum.en;

  entity.createdAt = date;
  entity.updatedAt = date;
  entity.deletedAt = null;
  return entity;
}

export function mockUser(): User {
  const user = new User();

  user.id = 1;
  user.email = 'user@doozyx.com';
  user.role = RoleEnum.user;
  user.status = StatusEnum.approved;

  user.password = 'password';
  user.previousPassword = 'password';

  user.statusReason = null;

  user.language = LanguageEnum.en;

  user.createdAt = date;
  user.updatedAt = date;
  user.deletedAt = null;
  return user;
}
