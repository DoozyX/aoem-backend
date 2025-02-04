import { FindOperator, ILike } from 'typeorm';

export function filterText(text: string): FindOperator<string> {
  return ILike(`%${text.toLowerCase().trim()}%`);
}
