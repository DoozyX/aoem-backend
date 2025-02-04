import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import {
  Channel,
  ChannelEntity,
  ChannelMapper,
  ChannelRepository,
  ChannelType,
} from '@app/channels';

@Injectable()
export class ChannelRelationalRepository implements ChannelRepository {
  constructor(
    @InjectRepository(ChannelEntity)
    private readonly repository: Repository<ChannelEntity>,
  ) {}

  async create(channel: Channel): Promise<Channel> {
    const persistenceModel = ChannelMapper.toPersistence(channel);
    const res = await this.repository.insert(persistenceModel);
    const entity = await this.findById(res.identifiers[0].id);
    return entity!;
  }

  async findAll(): Promise<Channel[]> {
    const channelEntities = await this.repository.find();
    return channelEntities.map((channelEntity) =>
      ChannelMapper.toDomain(channelEntity),
    );
  }

  async findById(id: number): Promise<Channel | null> {
    const channelEntity = await this.repository.findOne({ where: { id } });
    return channelEntity ? ChannelMapper.toDomain(channelEntity) : null;
  }

  async findByUid(uid: string): Promise<Channel | null> {
    const channelEntity = await this.repository.findOne({ where: { uid } });
    return channelEntity ? ChannelMapper.toDomain(channelEntity) : null;
  }

  async findByTypeAndGuild(
    type: ChannelType,
    guildId: number,
  ): Promise<Channel | null> {
    const channelEntity = await this.repository.findOne({
      where: { type, guildId },
    });
    return channelEntity ? ChannelMapper.toDomain(channelEntity) : null;
  }

  async findByIds(ids: number[]): Promise<Channel[]> {
    const channelEntities = await this.repository.find({
      where: { id: In(ids) },
    });

    return channelEntities.map((channelEntity) =>
      ChannelMapper.toDomain(channelEntity),
    );
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
