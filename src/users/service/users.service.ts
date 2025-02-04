import {
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import { DataSource, DeepPartial } from 'typeorm';

import type { JwtPayloadType } from '@app/auth/types';
import { allAdminRoles } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { NullableType, PageDto, PageMetaDto } from '@app/utils';

import { User } from '@app/users';
import { UserStatistics } from '../domain/user-statistics';
import { ActivateUserDto } from '@app/users';
import { CreateIndividualUserDto, CreateUserDto } from '@app/users';
import { QueryUserDto } from '@app/users';
import {
  UserCreatedEvent,
  UserStatusUpdatedEvent,
  UserUpdatedEvent,
} from '../event';
import { CreateUser, UserRepository } from '@app/users';

export class EmailAlreadyExistsException extends UnprocessableEntityException {
  constructor() {
    super('emailAlreadyExists');
  }
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly eventEmitter: EventEmitter2,
    private dataSource: DataSource,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.newUserData(createUserDto);

    const createdUser = await this.usersRepository.create(user);

    this.eventEmitter.emit(
      UserCreatedEvent.fullEventName,
      new UserCreatedEvent(createdUser),
    );

    return createdUser;
  }

  async createIndividual(
    createUserDto: CreateIndividualUserDto,
  ): Promise<User> {
    const user = await this.newUserData(createUserDto);

    let result: User | null = null;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const createdUser = await this.usersRepository.create(user);

      this.eventEmitter.emit(
        UserCreatedEvent.fullEventName,
        new UserCreatedEvent(createdUser),
      );

      result = createdUser;
    } catch (error) {
      this.logger.error(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    if (!result) {
      throw new UnprocessableEntityException();
    }

    return result;
  }

  async update(
    userJwt: JwtPayloadType | null,
    id: number,
    payload: DeepPartial<User>,
  ): Promise<User | null> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException();
    }
    const clonedPayload = _.cloneDeep(payload);

    if (
      clonedPayload.password &&
      clonedPayload.previousPassword !== clonedPayload.password
    ) {
      const salt = await bcrypt.genSalt();
      clonedPayload.password = await bcrypt.hash(clonedPayload.password, salt);
    }

    if (clonedPayload.email) {
      const userObject = await this.usersRepository.findByEmail(
        clonedPayload.email,
      );

      if (userObject && userObject.id !== id) {
        throw new EmailAlreadyExistsException();
      }
    }

    const updatedUser = await this.usersRepository.update(id, clonedPayload);

    if (user.status !== updatedUser?.status) {
      this.eventEmitter.emit(
        UserStatusUpdatedEvent.fullEventName,
        new UserStatusUpdatedEvent(userJwt?.id || user.id, user, updatedUser!),
      );
    }

    this.eventEmitter.emit(
      UserUpdatedEvent.fullEventName,
      new UserUpdatedEvent(userJwt?.id || user.id, user, updatedUser!),
    );

    return updatedUser;
  }

  async activate(
    userJwt: JwtPayloadType | null,
    id: number,
    activateUserDto: ActivateUserDto,
  ): Promise<User | null> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException();
    }
    const status: StatusEnum = activateUserDto.status as unknown as StatusEnum;

    if (user.status === StatusEnum.inactive && status !== StatusEnum.verified) {
      throw new ForbiddenException();
    }

    const updatedUser = await this.usersRepository.update(id, {
      status,
      statusReason: activateUserDto.statusReason,
    });

    this.eventEmitter.emit(
      UserStatusUpdatedEvent.fullEventName,
      new UserStatusUpdatedEvent(userJwt?.id || id, user, updatedUser!),
    );

    return updatedUser;
  }

  async findManyWithPagination(query: QueryUserDto): Promise<PageDto<User>> {
    const data = await this.usersRepository.findManyWithPagination(query);
    const itemCount = await this.usersRepository.count(query.filter);

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto: query });

    return new PageDto(data, pageMetaDto);
  }

  findById(id: number): Promise<NullableType<User>> {
    return this.usersRepository.findById(id);
  }

  findByEmail(email: string): Promise<NullableType<User>> {
    return this.usersRepository.findByEmail(email);
  }

  async statistics(): Promise<UserStatistics> {
    const statistics = new UserStatistics();
    statistics.inactive = await this.usersRepository.count({
      statuses: [StatusEnum.inactive],
    });
    statistics.verified = await this.usersRepository.count({
      statuses: [StatusEnum.verified],
    });
    statistics.approved = await this.usersRepository.count({
      statuses: [StatusEnum.approved],
    });
    statistics.pending = await this.usersRepository.count({
      statuses: [StatusEnum.pending],
    });
    statistics.rejected = await this.usersRepository.count({
      statuses: [StatusEnum.rejected],
    });
    statistics.total = await this.usersRepository.count();

    return statistics;
  }

  async getAdminEmails(): Promise<string[]> {
    const query = new QueryUserDto();
    query.filter = { roles: allAdminRoles };

    const admins = await this.usersRepository.findManyWithPagination(query);
    const emails = admins.map((admin) => admin.email);
    return emails;
  }

  private async newUserData(data: CreateUserDto): Promise<CreateUser> {
    const { password, ...createUser } = data;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const userObject = await this.usersRepository.findByEmail(data.email);
    if (userObject) {
      throw new EmailAlreadyExistsException();
    }

    return { ...createUser, password: hashedPassword, statusReason: null };
  }
}
