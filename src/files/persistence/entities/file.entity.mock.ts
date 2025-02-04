import { FileEntity } from './file.entity';

export function createFileEntityMock(date: Date): FileEntity {
  const file = new FileEntity();
  file.id = '1';
  file.data = Buffer.from([]);
  file.mimeType = 'text/plain';
  file.name = 'file.txt';

  file.createdAt = date;
  file.updatedAt = date;
  file.deletedAt = null;
  return file;
}

export function createFileIdEntityMock(): FileEntity {
  const file = new FileEntity();
  file.id = '1';
  return file;
}
