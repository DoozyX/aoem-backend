import { ErrorResponse } from '@app/utils';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseFilePipeBuilder,
  Post,
  Req,
  Res,
  UnprocessableEntityException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request, Response } from 'express';

import { ValidJwtGuard } from '@app/auth/guard/valid-jwt.guard';
import { VerifiedGuard } from '@app/statuses';

import { FileType } from './domain/file';
import { FilesService } from './service/files.service';

const maxFileSize = 5242880; // 5mb

@ApiTags('Files')
@UseGuards(ValidJwtGuard, VerifiedGuard)
@ApiBearerAuth()
@Controller({
  path: 'files',
  version: '1',
})
export class FilesLocalController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'File uploaded',
    type: FileType,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiUnprocessableEntityResponse({
    description: 'Missing file',
    type: () => ErrorResponse,
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpg|jpeg|png|pdf)$/,
        })
        .addMaxSizeValidator({
          maxSize: maxFileSize,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          exceptionFactory: (errors) =>
            new UnprocessableEntityException(errors),
        }),
    )
    file: Express.Multer.File,
    @Req() req: Request,
  ): Promise<FileType> {
    return this.filesService.create(req.user!.id, file);
  }

  @Get(':id')
  @ApiExcludeEndpoint()
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async download(
    @Param('id') id: string,
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    const file = await this.filesService.findById(req.user!, id);
    if (!file) {
      throw new NotFoundException();
    }

    response.set({
      'Content-Disposition': `inline; filename="${file.name}"`,
      'Content-Type': file.mimeType,
      'Content-Length': file.data.length,
    });
    response.write(file.data);
    response.end();
  }
}
