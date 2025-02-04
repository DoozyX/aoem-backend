import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOptionsOrder,
  FindOptionsWhere,
  LessThan,
  Not,
  Repository,
} from 'typeorm';

import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { NullableType, enumToId, filterText } from '@app/utils';

import { User } from '../../domain/user';
import {
  FilterUserDto,
  QueryUserDto,
  SortUserDto,
} from '../../dto/query-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersRelationalRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(data: User): Promise<User> {
    const persistenceModel = UserMapper.toPersistence(data);
    const res = await this.repository.insert(persistenceModel);
    const entity = await this.findById(res.identifiers[0].id);
    return entity!;
  }

  count(filter?: FilterUserDto): Promise<number> {
    return this.repository.count({ where: this.getWhere(filter) });
  }

  async findManyWithPagination(query: QueryUserDto): Promise<User[]> {
    const entities = await this.repository.find({
      skip:
        query.page != null && query.limit != null
          ? (query.page - 1) * query.limit
          : undefined,
      take: query.limit,
      where: this.getWhere(query.filter),
      order: this.getOrderBy(query.sort),
    });

    return entities.map((user) => UserMapper.toDomain(user));
  }

  async findById(id: number): Promise<NullableType<User>> {
    const entity = await this.repository.findOne({
      where: { id },
    });

    return entity ? UserMapper.toDomain(entity) : null;
  }

  async findByEmail(email: string): Promise<NullableType<User>> {
    const entity = await this.repository.findOne({
      where: { email },
    });

    return entity ? UserMapper.toDomain(entity) : null;
  }

  async findLastUpdatedAtBefore(date: Date): Promise<User[]> {
    const entities = await this.repository.find({
      where: {
        updatedAt: LessThan(date),
        statusId: Not(enumToId(StatusEnum, StatusEnum.expired)),
      },
    });

    return entities.map((user) => UserMapper.toDomain(user));
  }

  async update(id: number, payload: Partial<User>): Promise<User> {
    const entity = await this.findById(id);
    if (!entity) {
      throw new NotFoundException();
    }

    const updated = UserMapper.toPersistence({
      ...entity,
      ...payload,
    });

    await this.repository.save(this.repository.create(updated));

    const updatedEntity = await this.findById(id);

    return updatedEntity!;
  }

  async updateManyStatus(userIds: number[], status: StatusEnum): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ statusId: enumToId(StatusEnum, status) })
      .whereInIds(userIds)
      .execute();
  }

  async remove(id: number): Promise<void> {
    await this.repository.softDelete(id);
  }

  private getWhere(filter?: FilterUserDto): FindOptionsWhere<UserEntity> {
    const where: FindOptionsWhere<UserEntity> = {};
    if (!filter) {
      return where;
    }
    if (filter.roles && filter.roles.length > 0) {
      where.role = filter.roles.map((role) => ({
        id: enumToId(RoleEnum, role),
      }));
    }

    if (filter.email && filter.email.length > 0) {
      where.email = filterText(filter.email);
    }

    if (filter.statuses && filter.statuses.length > 0) {
      where.status = filter.statuses.map((status) => ({
        id: enumToId(StatusEnum, status),
      }));
    }

    return where;
  }

  private getOrderBy(sort?: SortUserDto[]): FindOptionsOrder<UserEntity> {
    return (
      sort?.reduce(
        (accumulator, sort) => ({
          ...accumulator,
          [sort.orderBy]: sort.order,
        }),
        {},
      ) ?? {}
    );
  }
}
