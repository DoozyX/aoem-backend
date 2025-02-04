import { StatusEnum } from '@app/statuses';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class ActivateUserDto {
  @ApiPropertyOptional()
  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  statusReason?: string;
}
