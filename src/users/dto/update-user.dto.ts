import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { lowerCaseTransformer } from '@app/utils';

import { CreateIndividualUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateIndividualUserDto) {
  @ApiPropertyOptional({ example: 'test1@doozyx.com' })
  @Transform(lowerCaseTransformer)
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional()
  @IsEnum(RoleEnum)
  @IsOptional()
  role?: RoleEnum;

  @ApiPropertyOptional()
  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  statusReason?: string;
}
