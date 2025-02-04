import { AbstractEntityNoId } from '@app/utils';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'role',
})
export class RoleEntity extends AbstractEntityNoId {
  @PrimaryColumn()
  id: number;

  @Column()
  name?: string;
}
