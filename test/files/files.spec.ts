import { Api, getApiError, TESTER_AUTH } from '@test/utils';

import { HttpStatus } from '@nestjs/common';
import { createFakeFile } from './util';

describe('Files', () => {
  describe('Upload', () => {
    it('should successfully upload', async () => {
      const api = await Api.withLogin(TESTER_AUTH);

      const file = createFakeFile(4 * 1024 * 1024);
      const res = await api.files.filesLocalControllerUploadFile(file);
      expect(res).toBeDefined();
      expect(res.id).toBeDefined();
    });

    it('should be able to upload jpg/jpeg/pdf/png', async () => {
      const api = await Api.withLogin(TESTER_AUTH);

      const filesTypes = [
        'image/jpg',
        'image/jpeg',
        'application/pdf',
        'image/png',
      ];

      for (const type of filesTypes) {
        const file = createFakeFile(1, type);
        const res = await api.files.filesLocalControllerUploadFile(file);
        expect(res).toBeDefined();
        expect(res.id).toBeDefined();
      }
    });

    it('should fail to upload file larger than 5mb', async () => {
      const api = await Api.withLogin(TESTER_AUTH);

      const file = createFakeFile(6 * 1024 * 1024);
      try {
        const res = await api.files.filesLocalControllerUploadFile(file);
        expect(res).not.toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      }
    });

    it('should fail to upload file other than jpg/jpeg/pdf/png', async () => {
      const api = await Api.withLogin(TESTER_AUTH);

      const file = createFakeFile(1, 'application/zip');
      try {
        const res = await api.files.filesLocalControllerUploadFile(file);
        expect(res).not.toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      }
    });
  });
});
