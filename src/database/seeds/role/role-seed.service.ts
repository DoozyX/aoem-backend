import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RoleEntity, RoleEnum } from '@app/roles';
import { enumToId } from '@app/utils';

@Injectable()
export class RoleSeedService {
  constructor(
    @InjectRepository(RoleEntity)
    private repository: Repository<RoleEntity>,
  ) {}

  async createRoleIfNoExist(role: RoleEnum, name: string): Promise<void> {
    const id = enumToId(RoleEnum, role);
    const countRole = await this.repository.count({
      where: {
        id,
      },
    });

    if (!countRole) {
      await this.repository.save(
        this.repository.create({
          id,
          name: name,
        }),
      );
    }
  }

  async run(): Promise<void> {
    await this.createRoleIfNoExist(RoleEnum.user, 'User');
    await this.createRoleIfNoExist(RoleEnum.admin, 'Admin');
    await this.createRoleIfNoExist(RoleEnum.approver, 'Approver');
    await this.createRoleIfNoExist(RoleEnum.director, 'Director');
    await this.createRoleIfNoExist(RoleEnum.superAdmin, 'Super Admin');
    await this.createRoleIfNoExist(RoleEnum.archiver, 'Archiver');
  }
}
