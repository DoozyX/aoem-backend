import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import {
  applyAbstractEntity,
  applyAbstractModel,
  enumToId,
  idToEnum,
} from '@app/utils';

import { UserEntity, User } from '@app/users';

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const user = new User();
    applyAbstractEntity(user, raw);
    user.email = raw.email;
    user.password = raw.password;
    user.previousPassword = raw.previousPassword;
    user.role = idToEnum(RoleEnum, raw.roleId);
    user.status = idToEnum(StatusEnum, raw.statusId);
    user.statusReason = raw.statusReason;

    user.language = raw.language;

    return user;
  }

  static toPersistence(user: User): UserEntity {
    const userEntity = new UserEntity();
    applyAbstractModel(userEntity, user);

    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.previousPassword = user.previousPassword;

    userEntity.roleId = enumToId(RoleEnum, user.role);

    userEntity.statusId = enumToId(StatusEnum, user.status);
    userEntity.statusReason = user.statusReason;

    userEntity.language = user.language;

    return userEntity;
  }
}
