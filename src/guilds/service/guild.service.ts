import { BadRequestException, Injectable } from '@nestjs/common';

import { Guild, GuildRepository } from '@app/guilds';

import { CreateGuildDto } from '../dto/create-guild.dto';

@Injectable()
export class GuildService {
  constructor(private readonly guildRepository: GuildRepository) {}

  async create(guild: CreateGuildDto): Promise<Guild> {
    try {
      return await this.guildRepository.create(guild);
    } catch {
      throw new BadRequestException();
    }
  }

  findAll(): Promise<Guild[]> {
    return this.guildRepository.findAll();
  }
}
