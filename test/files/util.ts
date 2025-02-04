import { FileType } from '@test/api_gen';
import { Api } from '@test/utils';

export function createFakeFile(size: number, type = 'application/pdf'): File {
  const data = 'a'.repeat(size);
  const blob = new Blob([data], { type, endings: 'native' });
  const extension = type.split('/')[1];
  const fileName = `${Date.now()}-${Math.random()}.${extension}`;
  return new File([blob], fileName, {
    type,
    lastModified: Date.now(),
  });
}

export function uploadFakeFile(api: Api): Promise<FileType> {
  return api.files.filesLocalControllerUploadFile(createFakeFile(1));
}
