import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

import { JobResponse } from './queue-job-response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ApiOkJobResponse = <DataDto extends Type<any>>(
  dataDto: DataDto,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any =>
  applyDecorators(
    ApiExtraModels(JobResponse, dataDto),
    ApiOkResponse({
      description: 'Successful response',
      schema: {
        allOf: [
          { $ref: getSchemaPath(JobResponse) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(dataDto),
              },
            },
          },
        ],
      },
    }),
  );
