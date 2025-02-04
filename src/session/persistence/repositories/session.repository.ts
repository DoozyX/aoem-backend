import { NullableType } from '@app/utils';

import { Session } from '../../domain/session';

export abstract class SessionRepository {
  abstract findById(id: number): Promise<NullableType<Session>>;

  abstract findByUserId(id: number): Promise<Session[]>;

  abstract create(
    data: Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Session>;

  abstract update(
    id: number,
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null>;

  abstract deleteById(id: number): Promise<void>;

  abstract deleteByUserId(userId: number): Promise<void>;

  abstract deleteByUserIdWithExclude(
    userId: number,
    excludeSessionId: number,
  ): Promise<void>;
}
