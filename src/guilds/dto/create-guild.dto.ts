import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGuildDto {
  @ApiProperty()
  @IsString()
  uid: string;

  @ApiProperty()
  @IsString()
  name: string;
}
