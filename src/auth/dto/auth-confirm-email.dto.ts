import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthConfirmEmailDto {
  @ApiProperty()
  @IsString()
  hash: string;
}
