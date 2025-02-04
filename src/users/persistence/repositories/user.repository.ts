import { DeepPartial } from 'typeorm';

import { NullableType } from '@app/utils';

import { StatusEnum } from '@app/statuses';
import { User } from '../../domain/user';
import { FilterUserDto, QueryUserDto } from '../../dto/query-user.dto';

export type CreateUser = Omit<
  User,
  'id' | 'createdAt' | 'deletedAt' | 'updatedAt'
>;

export abstract class UserRepository {
  abstract create(data: CreateUser): Promise<User>;

  abstract count(filter?: FilterUserDto): Promise<number>;

  abstract findManyWithPagination(query: QueryUserDto): Promise<User[]>;

  abstract findById(id: number): Promise<NullableType<User>>;
  abstract findByEmail(email: string): Promise<NullableType<User>>;
  abstract findLastUpdatedAtBefore(date: Date): Promise<User[]>;

  abstract update(id: number, payload: DeepPartial<User>): Promise<User | null>;
  abstract updateManyStatus(
    userIds: number[],
    status: StatusEnum,
  ): Promise<void>;

  abstract remove(id: number): Promise<void>;
}
