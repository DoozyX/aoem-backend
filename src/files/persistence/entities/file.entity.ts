import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from '@app/users/persistence/entities/user.entity';
import { AbstractEntityNoId } from '@app/utils';

@Entity({ name: 'file' })
export class FileEntity extends AbstractEntityNoId {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne('UserEntity', (user: UserEntity) => user.id)
  user: UserEntity;

  @Column()
  userId: number;

  @Column({ default: '' })
  name: string;

  @Column({
    select: false,
    type: 'bytea',
  })
  data: Buffer;

  @Column()
  mimeType: string;
}
