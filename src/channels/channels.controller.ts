import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { Channel } from './domain/channel';
import { ChannelService } from './service/channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';

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
}
