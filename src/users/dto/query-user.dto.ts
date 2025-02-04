import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';
import { Order, PageOptionsDto } from '@app/utils';

export class FilterUserDto {
  @ApiPropertyOptional({ enum: RoleEnum, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(RoleEnum, { each: true })
  roles?: RoleEnum[];

  @ApiPropertyOptional({ enum: StatusEnum, isArray: true })
  @IsOptional()
  @IsArray()
  @IsEnum(StatusEnum, { each: true })
  statuses?: StatusEnum[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  email?: string;
}

enum OrderFields {
  email = 'email',
  type = 'type',
  role = 'roleId',
  status = 'statusId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  deletedAt = 'deletedAt',
}

export class SortUserDto {
  @ApiProperty()
  @IsEnum(OrderFields)
  orderBy: OrderFields;

  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.ASC;
}

export class QueryUserDto extends PageOptionsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => FilterUserDto)
  filter?: FilterUserDto;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SortUserDto)
  sort?: SortUserDto[];
}
