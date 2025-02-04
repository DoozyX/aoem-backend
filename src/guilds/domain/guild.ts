import { AbstractModel } from '@app/utils';
import { ApiProperty } from '@nestjs/swagger';

export class Guild extends AbstractModel {
  @ApiProperty()
  uid: string;

  @ApiProperty()
  name: string;
}
