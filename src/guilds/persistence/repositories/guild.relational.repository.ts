import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Order } from '@app/utils';

import { Guild, GuildEntity, GuildMapper, GuildRepository } from '@app/guilds';

@Injectable()
export class GuildRelationalRepository implements GuildRepository {
  constructor(
    @InjectRepository(GuildEntity)
    private readonly repository: Repository<GuildEntity>,
  ) {}

  async create(guild: Guild): Promise<Guild> {
    const persistenceModel = GuildMapper.toPersistence(guild);
    const res = await this.repository.insert(persistenceModel);
    const entity = await this.findById(res.identifiers[0].id);
    return entity!;
  }

  async findAll(): Promise<Guild[]> {
    const guildEntities = await this.repository.find({
      order: { name: Order.ASC },
    });
    return guildEntities.map((guildEntity) =>
      GuildMapper.toDomain(guildEntity),
    );
  }

  async findById(id: number): Promise<Guild | null> {
    const guildEntity = await this.repository.findOne({ where: { id } });
    return guildEntity ? GuildMapper.toDomain(guildEntity) : null;
  }

  async findByUid(uid: string): Promise<Guild | null> {
    const guildEntity = await this.repository.findOne({ where: { uid } });
    return guildEntity ? GuildMapper.toDomain(guildEntity) : null;
  }

  async findByIds(ids: number[]): Promise<Guild[]> {
    const guildEntities = await this.repository.find({
      where: { id: In(ids) },
      order: { name: Order.ASC },
    });

    return guildEntities.map((guildEntity) =>
      GuildMapper.toDomain(guildEntity),
    );
  }
}
