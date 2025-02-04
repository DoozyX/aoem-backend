import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StatusEntity, StatusEnum } from '@app/statuses';
import { enumToId } from '@app/utils';

@Injectable()
export class StatusSeedService {
  constructor(
    @InjectRepository(StatusEntity)
    private repository: Repository<StatusEntity>,
  ) {}

  async run(): Promise<void> {
    const count = await this.repository.count();

    if (!count) {
      await this.repository.save([
        this.repository.create({
          id: enumToId(StatusEnum, StatusEnum.inactive),
          name: 'Inactive',
        }),
        this.repository.create({
          id: enumToId(StatusEnum, StatusEnum.verified),
          name: 'Verified',
        }),
        this.repository.create({
          id: enumToId(StatusEnum, StatusEnum.pending),
          name: 'Pending',
        }),
        this.repository.create({
          id: enumToId(StatusEnum, StatusEnum.approved),
          name: 'Approved',
        }),
        this.repository.create({
          id: enumToId(StatusEnum, StatusEnum.rejected),
          name: 'Rejected',
        }),
        this.repository.create({
          id: enumToId(StatusEnum, StatusEnum.expired),
          name: 'Expired',
        }),
      ]);
    }
  }
}
