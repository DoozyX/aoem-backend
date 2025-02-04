import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsStrongPassword } from 'class-validator';

import { LanguageEnum } from '@app/i18n';
import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { lowerCaseTransformer } from '@app/utils';

export class CreateUserDto {
  @ApiProperty()
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ enum: RoleEnum })
  @IsEnum(RoleEnum)
  role: RoleEnum;

  @ApiProperty({ enum: StatusEnum })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiProperty({ enum: LanguageEnum })
  @IsEnum(LanguageEnum)
  language: LanguageEnum;
}

export class CreateIndividualUserDto {
  @ApiProperty()
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ enum: RoleEnum })
  @IsEnum(RoleEnum)
  role: RoleEnum;

  @ApiProperty({ enum: StatusEnum })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiProperty({ enum: LanguageEnum })
  @IsEnum(LanguageEnum)
  language: LanguageEnum;
}
