import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

import { ChannelType } from '@app/channels';

export class CreateChannelDto {
  @ApiProperty()
  @IsString()
  uid: string;

  @ApiProperty()
  @IsString()
  guildUid: string;

  @ApiProperty({ enum: ChannelType })
  @IsEnum(ChannelType)
  type: ChannelType;
}
