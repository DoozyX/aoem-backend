import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

import { LanguageEnum } from '@app/i18n';
import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { AbstractModel } from '@app/utils';

export class User extends AbstractModel {
  @ApiProperty()
  email: string;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @ApiProperty({ enum: RoleEnum })
  role: RoleEnum;

  @ApiProperty({ enum: StatusEnum })
  status: StatusEnum;

  @ApiProperty({ type: String, nullable: true })
  statusReason: string | null;

  @ApiProperty({ enum: LanguageEnum })
  language: LanguageEnum;
}
