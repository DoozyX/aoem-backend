import { Column, Entity, PrimaryColumn } from 'typeorm';

import { AbstractEntityNoId } from '@app/utils';

@Entity({
  name: 'status',
})
export class StatusEntity extends AbstractEntityNoId {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
