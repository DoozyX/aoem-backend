import { Injectable } from '@nestjs/common';

import { Guild, GuildRepository } from '@app/guilds';

import { CreateGuildDto } from '../dto/create-guild.dto';

@Injectable()
export class GuildService {
  constructor(private readonly guildRepository: GuildRepository) {}

  create(guild: CreateGuildDto): Promise<Guild> {
    return this.guildRepository.create(guild);
  }

  findAll(): Promise<Guild[]> {
    return this.guildRepository.findAll();
  }
}
