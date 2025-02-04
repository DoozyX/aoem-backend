import { ApiException, ErrorResponse } from '@test/api_gen';

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getApiError(error: unknown): ApiException<ErrorResponse> {
  if (!(error instanceof ApiException)) {
    throw error;
  }
  return error as ApiException<ErrorResponse>;
}
