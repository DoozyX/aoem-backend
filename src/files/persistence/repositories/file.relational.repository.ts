import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../entities/file.entity';
import { FileRepository } from './file.repository';

import { NullableType } from '@app/utils';
import { FileType } from '../../domain/file';
import { FileMapper } from '../mappers/file.mapper';

@Injectable()
export class FileRelationalRepository implements FileRepository {
  constructor(
    @InjectRepository(FileEntity)
    private readonly repository: Repository<FileEntity>,
  ) {}

  async create(data: FileType): Promise<FileType> {
    const persistenceModel = FileMapper.toPersistence(data);
    const res = await this.repository.insert(persistenceModel);
    const entity = await this.findById(res.identifiers[0].id);
    return entity!;
  }

  async findById(id: string): Promise<NullableType<FileType>> {
    const entity = await this.repository.findOne({
      where: { id },
      select: ['id', 'name', 'mimeType', 'userId', 'data'],
    });

    return entity ? FileMapper.toDomain(entity) : null;
  }
}
