import { FileType } from './file';

export function createFileMock(date: Date): FileType {
  const file = new FileType();
  file.id = '1';
  file.data = Buffer.from([]);
  file.mimeType = 'text/plain';
  file.name = 'file.txt';

  file.createdAt = date;
  file.updatedAt = date;
  file.deletedAt = null;
  return file;
}
