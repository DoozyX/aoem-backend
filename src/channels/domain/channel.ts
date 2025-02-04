import { AbstractModel } from '@app/utils';
import { ApiProperty } from '@nestjs/swagger';

import { Guild } from '@app/guilds';

export enum ChannelType {
  Construction = 'construction',
  Research = 'research',
  Training = 'training',
}

export class Channel extends AbstractModel {
  @ApiProperty()
  uid: string;

  @ApiProperty()
  guild: Guild;

  @ApiProperty()
  guildId: number;

  @ApiProperty({ enum: ChannelType })
  type: ChannelType;
}
