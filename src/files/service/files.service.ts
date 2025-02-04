import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { FileType } from '../domain/file';
import { FileRepository } from '../persistence/repositories/file.repository';

import type { JwtPayloadType } from '@app/auth/types';
import { NullableType } from '@app/utils';

@Injectable()
export class FilesService {
  constructor(private readonly fileRepository: FileRepository) {}

  async create(userId: number, file: Express.Multer.File): Promise<FileType> {
    if (!file) {
      throw new UnprocessableEntityException();
    }

    return await this.fileRepository.create({
      name: file.originalname,
      data: file.buffer,
      mimeType: file.mimetype,
      userId,
    });
  }

  async findById(
    userJwt: JwtPayloadType,
    id: string,
  ): Promise<NullableType<FileType>> {
    const file = await this.fileRepository.findById(id);
    if (!file) {
      throw new NotFoundException();
    }

    return file;
  }
}
