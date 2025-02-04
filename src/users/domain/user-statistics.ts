import { ApiProperty } from '@nestjs/swagger';

export class UserStatistics {
  @ApiProperty()
  inactive: number;

  @ApiProperty()
  verified: number;

  @ApiProperty()
  pending: number;

  @ApiProperty()
  approved: number;

  @ApiProperty()
  rejected: number;

  @ApiProperty()
  total: number;
}
