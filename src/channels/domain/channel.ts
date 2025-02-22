import { AbstractModel } from '@app/utils';
import { ApiProperty } from '@nestjs/swagger';

import { Guild } from '@app/guilds';

export enum BuffType {
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

  @ApiProperty({ enum: BuffType })
  type: BuffType;
}
