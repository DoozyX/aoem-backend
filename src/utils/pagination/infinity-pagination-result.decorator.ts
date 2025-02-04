import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

import { PageDto } from './page.dto';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ApiOkResponsePaginated = <DataDto extends Type<any>>(
  dataDto: DataDto,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any =>
  applyDecorators(
    ApiExtraModels(PageDto, dataDto),
    ApiOkResponse({
      description: 'Successful response',
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
