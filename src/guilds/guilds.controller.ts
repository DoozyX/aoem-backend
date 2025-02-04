import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Guild } from './domain/guild';
import { GuildService } from './service/guild.service';
import { CreateGuildDto } from './dto/create-guild.dto';

@ApiTags('Guilds')
@Controller({
  path: 'guilds',
  version: '1',
})
export class GuildsController {
  constructor(private readonly guildService: GuildService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'Create a guild',
    type: Guild,
  })
  create(@Body() createUserDto: CreateGuildDto): Promise<Guild> {
    return this.guildService.create(createUserDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'List of guild',
    type: Guild,
    isArray: true,
  })
  findAll(): Promise<Guild[]> {
    return this.guildService.findAll();
  }
}
