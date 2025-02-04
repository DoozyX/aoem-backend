import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';

import { AllConfigType } from '@app/config';
import { FileEntity } from '@app/files';
import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { User, UserEntity, UserMapper } from '@app/users';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
    private configService: ConfigService<AllConfigType>,
  ) {}

  async saveUser(user: User): Promise<UserEntity> {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.password ?? 'secret', salt);

    user.password = password;

    const userEntity = UserMapper.toPersistence(user);

    return await this.userRepository.save(userEntity);
  }
  async run(): Promise<void> {
    await this.saveUser({
      email: 'superadmin@doozyx.com',
      password: 'secret',
      role: RoleEnum.superAdmin,
      status: StatusEnum.verified,
    } as User);
  }
}
