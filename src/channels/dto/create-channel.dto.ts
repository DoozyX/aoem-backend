import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

import { BuffType } from '@app/channels';

export class CreateChannelDto {
  @ApiProperty()
  @IsString()
  uid: string;

  @ApiProperty()
  @IsString()
  guildUid: string;

  @ApiProperty({ enum: BuffType })
  @IsEnum(BuffType)
  type: BuffType;
}
