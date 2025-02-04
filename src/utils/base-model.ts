import { ApiProperty } from '@nestjs/swagger';

export abstract class AbstractModelNoId {
  @ApiProperty()
  public createdAt: Date;

  @ApiProperty({ type: Date, nullable: true })
  public updatedAt: Date | null;

  @ApiProperty({ type: Date, nullable: true })
  public deletedAt: Date | null;
}

export abstract class AbstractModel extends AbstractModelNoId {
  @ApiProperty()
  public id: number;
}
