import { lowerCaseTransformer } from '@app/utils';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class AuthEmailLoginDto {
  @ApiProperty({ example: 'user@doozyx.com' })
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
