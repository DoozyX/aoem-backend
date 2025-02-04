import { Column, Entity, Index, ManyToOne, Unique } from 'typeorm';

import { AbstractEntity } from '@app/utils';
import { Channel, ChannelType } from '@app/channels';
import { GuildEntity } from '@app/guilds';

@Entity({
  name: 'channel',
})
@Unique('UQ_guildId_type', ['guildId', 'type'])
export class ChannelEntity extends AbstractEntity implements Channel {
  @Column({ unique: true })
  uid: string;

  @ManyToOne(() => GuildEntity)
  @Index()
  guild: GuildEntity;

  @Column()
  guildId: number;

  @Column()
  type: ChannelType;
}
