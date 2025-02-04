import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { UserEntity } from '@app/users';
import { AbstractEntity } from '@app/utils';

@Entity({
  name: 'session',
})
export class SessionEntity extends AbstractEntity {
  @ManyToOne(() => UserEntity)
  @Index()
  user: UserEntity;

  @Column()
  userId: number;

  @Column()
  hash: string;
}
