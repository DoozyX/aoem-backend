import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsStrongPassword, MinLength } from 'class-validator';

import { LanguageEnum } from '@app/i18n';
import { lowerCaseTransformer } from '@app/utils';

export class AuthRegisterLoginDto {
  @ApiProperty({ example: 'user@doozyx.com' })
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  @IsStrongPassword()
  password: string;

  @ApiProperty({ enum: LanguageEnum })
  @IsEnum(LanguageEnum)
  language: LanguageEnum;
}
