import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class AuthUpdateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  oldPassword?: string;
}
