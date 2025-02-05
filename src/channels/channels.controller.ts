import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseEnumPipe,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { BuffType, Channel } from './domain/channel';
import { ChannelService } from './service/channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { NullableType } from '@app/utils';

@ApiTags('Channels')
@Controller({
  path: 'channels',
  version: '1',
})
export class ChannelsController {
  constructor(private readonly channelService: ChannelService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'Create a channel',
    type: Channel,
  })
  create(@Body() createUserDto: CreateChannelDto): Promise<Channel> {
    return this.channelService.create(createUserDto);
  }

  @Get('/:guildUid/:type')
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
    description: 'Returns the channel if exists',
    type: Channel,
  })
  findOne(
    @Param('guildUid') uid: string,
    @Param('type', new ParseEnumPipe(BuffType)) type: BuffType,
  ): Promise<NullableType<Channel>> {
    return this.channelService.findByGuildAndType(uid, type);
  }
}
