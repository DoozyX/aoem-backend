import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntityNoId extends BaseEntity {
  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date | null;

  @DeleteDateColumn()
  public deletedAt: Date | null;
}

export abstract class AbstractEntity extends AbstractEntityNoId {
  @PrimaryGeneratedColumn()
  public id: number;
}
