import { NullableType } from '@app/utils';

import { FileType } from '../../domain/file';

export type CreateFileType = Omit<
  FileType,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

export abstract class FileRepository {
  abstract create(data: CreateFileType): Promise<FileType>;

  abstract findById(id: string): Promise<NullableType<FileType>>;
}
