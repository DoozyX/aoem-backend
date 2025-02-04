import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

import { AbstractModelNoId } from '@app/utils';

export class FileType extends AbstractModelNoId {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  userId: number;

  @Exclude()
  mimeType: string;

  @Exclude()
  data: Buffer;
}
