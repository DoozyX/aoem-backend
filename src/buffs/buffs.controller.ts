import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseEnumPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { Buff } from './domain/buff';
import { BuffService } from './service/buff.service';
import { CreateBuffDto } from './dto/create-buff.dto';
import { BuffType } from '@app/channels';

@ApiTags('Buffs')
@Controller({
  path: 'buffs',
  version: '1',
})
export class BuffsController {
  constructor(private readonly buffService: BuffService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'Create a buff',
    type: Buff,
  })
  create(@Body() createUserDto: CreateBuffDto): Promise<Buff> {
    return this.buffService.create(createUserDto);
  }

  @Patch('/:guildUid/:type')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'guildUid',
    type: String,
    required: true,
  })
  @ApiParam({
    name: 'type',
    type: () => BuffType,
    enum: BuffType,
    required: true,
  })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: Buff,
    isArray: true,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid data provided',
  })
  findAll(
    @Param('guildUid') uid: string,
    @Param('type', new ParseEnumPipe(BuffType)) type: BuffType,
  ): Promise<Buff[] | null> {
    return this.buffService.findAll(uid, type);
  }
}
