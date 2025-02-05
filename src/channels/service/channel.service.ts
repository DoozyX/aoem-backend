import { Injectable, Logger, NotFoundException } from '@nestjs/common';

import { BuffType, Channel, ChannelRepository } from '@app/channels';

import { CreateChannelDto } from '../dto/create-channel.dto';
import { GuildRepository } from '@app/guilds';

@Injectable()
export class ChannelService {
  private readonly logger = new Logger(ChannelService.name);

  constructor(
    private readonly channelRepository: ChannelRepository,
    private readonly guildRepository: GuildRepository,
  ) {}

  async create(channel: CreateChannelDto): Promise<Channel> {
    const guild = await this.guildRepository.findByUid(channel.guildUid);
    if (!guild) {
      throw new NotFoundException('No guild guild');
    }
    const existingChannel = await this.channelRepository.findByUid(channel.uid);
    if (existingChannel) {
      await this.channelRepository.remove(existingChannel.id);
      this.logger.log(`deleting existing channel ${existingChannel.uid}`);
    }

    const existingChannelForType =
      await this.channelRepository.findByTypeAndGuild(channel.type, guild.id);
    if (existingChannelForType) {
      await this.channelRepository.remove(existingChannelForType.id);
      this.logger.log(
        `deleting existing channel for same type ${existingChannelForType.uid}`,
      );
    }

    return this.channelRepository.create({
      guildId: guild.id,
      uid: channel.uid,
      type: channel.type,
    });
  }

  findAll(): Promise<Channel[]> {
    return this.channelRepository.findAll();
  }

  async findByGuildAndType(
    guildUid: string,
    type: BuffType,
  ): Promise<Channel | null> {
    const guild = await this.guildRepository.findByUid(guildUid);
    if (!guild) {
      throw new NotFoundException('No guild guild');
    }
    return this.channelRepository.findByTypeAndGuild(type, guild.id);
  }
}
