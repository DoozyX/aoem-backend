import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsStrongPassword } from 'class-validator';

export class AuthResetPasswordDto {
  @ApiProperty()
  @IsStrongPassword()
  password: string;

  @ApiProperty()
  @IsString()
  hash: string;
}
