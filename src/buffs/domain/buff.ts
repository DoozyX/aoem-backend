import { AbstractModel } from '@app/utils';
import { ApiProperty } from '@nestjs/swagger';

import { Guild } from '@app/guilds';
import { BuffType } from '@app/channels';

export class Buff extends AbstractModel {
  @ApiProperty()
  guild: Guild;

  @ApiProperty()
  guildId: number;

  @ApiProperty({ enum: BuffType })
  type: BuffType;

  @ApiProperty()
  member: string;
}
