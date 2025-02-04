import { FileType } from '../../domain/file';
import { FileEntity } from '../entities/file.entity';

export class FileMapper {
  static toDomain(raw: FileEntity): FileType {
    const file = new FileType();
    file.id = raw.id;
    file.data = raw.data;
    file.name = raw.name;
    file.mimeType = raw.mimeType;
    file.userId = raw.userId;

    file.createdAt = raw.createdAt;
    file.updatedAt = raw.updatedAt;
    file.deletedAt = raw.deletedAt;
    return file;
  }

  static toPersistence(file: FileType): FileEntity {
    const fileEntity = new FileEntity();

    fileEntity.id = file.id;

    fileEntity.userId = file.userId;

    fileEntity.name = file.name;

    fileEntity.data = file.data;
    fileEntity.mimeType = file.mimeType;

    fileEntity.createdAt = file.createdAt;
    fileEntity.updatedAt = file.updatedAt;
    fileEntity.deletedAt = file.deletedAt;

    return fileEntity;
  }
}
