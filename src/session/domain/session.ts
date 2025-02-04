import { AbstractModel } from '@app/utils';

export class Session extends AbstractModel {
  userId: number;
  hash: string;
}
