import { AfterLoad, Column, Entity, ManyToOne } from 'typeorm';

import { RoleEntity } from '@app/roles';
import { StatusEntity } from '@app/statuses';
import { AbstractEntity } from '@app/utils';

import { LanguageEnum } from '@app/i18n';
import { User } from '@app/users';

@Entity({
  name: 'user',
})
export class UserEntity
  extends AbstractEntity
  implements Omit<User, 'role' | 'status'>
{
  @Column({ type: String, unique: true })
  email: string;

  @Column({ nullable: true })
  password?: string;

  public previousPassword?: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @Column()
  roleId: number;

  @ManyToOne(() => RoleEntity, {
    eager: true,
  })
  role: RoleEntity;

  @Column()
  statusId: number;

  @Column({ type: String, nullable: true })
  statusReason: string | null;

  @ManyToOne(() => StatusEntity, {
    eager: true,
  })
  status: StatusEntity;

  @Column({ default: LanguageEnum.en })
  language: LanguageEnum;
}
