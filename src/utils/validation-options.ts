import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipeOptions,
} from '@nestjs/common';

function generateErrors(errors: ValidationError[]): string {
  return errors.reduce((accumulator, currentValue) => {
    const errorMessages = Object.values(currentValue.constraints ?? {}).join(
      ', ',
    );
    return `${accumulator}${currentValue.property}: ${errorMessages}\n`;
  }, '');
}

export const validationOptions: ValidationPipeOptions = {
  // TODO(production): remove
  enableDebugMessages: true,
  transform: true,
  whitelist: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true,
  exceptionFactory(errors) {
    return new UnprocessableEntityException(generateErrors(errors));
  },
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
};
