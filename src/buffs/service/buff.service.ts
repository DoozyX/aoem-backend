import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { Buff, BuffRepository } from '@app/buffs';

import { CreateBuffDto } from '../dto/create-buff.dto';
import { GuildRepository } from '@app/guilds';
import { BuffType } from '@app/channels';

@Injectable()
export class BuffService {
  private readonly logger = new Logger(BuffService.name);

  constructor(
    private readonly buffRepository: BuffRepository,
    private readonly guildRepository: GuildRepository,
  ) {}

  async create(buff: CreateBuffDto): Promise<Buff> {
    const guild = await this.guildRepository.findByUid(buff.guildUid);
    if (!guild) {
      throw new NotFoundException('No guild guild');
    }

    try {
      return await this.buffRepository.create({
        guildId: guild.id,
        type: buff.type,
        member: buff.member,
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async findAll(guildUid: string, type: BuffType): Promise<Buff[]> {
    const guild = await this.guildRepository.findByUid(guildUid);
    if (!guild) {
      throw new NotFoundException('No guild guild');
    }

    return this.buffRepository.findByTypeAndGuild(type, guild.id);
  }
}
