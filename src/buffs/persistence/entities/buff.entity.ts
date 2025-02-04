import { Column, Entity, Index, ManyToOne, Unique } from 'typeorm';

import { AbstractEntity } from '@app/utils';
import { Buff } from '@app/buffs';
import { GuildEntity } from '@app/guilds';
import { BuffType } from '@app/channels';

@Entity({
  name: 'buff',
})
export class BuffEntity extends AbstractEntity implements Buff {
  @ManyToOne(() => GuildEntity)
  @Index()
  guild: GuildEntity;

  @Column()
  guildId: number;

  @Column()
  type: BuffType;

  @Column()
  member: string;
}
