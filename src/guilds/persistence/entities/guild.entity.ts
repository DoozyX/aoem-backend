import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '@app/utils';
import { Guild } from '@app/guilds';

@Entity({
  name: 'guild',
})
export class GuildEntity extends AbstractEntity implements Guild {
  @Column({ unique: true })
  uid: string;

  @Column()
  name: string;
}
