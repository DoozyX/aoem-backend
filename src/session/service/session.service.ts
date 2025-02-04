import { Injectable } from '@nestjs/common';

import { NullableType } from '@app/utils';

import { Session } from '../domain/session';
import { SessionRepository } from '../persistence/repositories/session.repository';

@Injectable()
export class SessionService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  findById(id: Session['id']): Promise<NullableType<Session>> {
    return this.sessionRepository.findById(id);
  }

  create(
    data: Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Session> {
    return this.sessionRepository.create(data);
  }

  update(
    id: Session['id'],
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null> {
    return this.sessionRepository.update(id, payload);
  }

  deleteById(id: Session['id']): Promise<void> {
    return this.sessionRepository.deleteById(id);
  }

  deleteByUserId(userId: number): Promise<void> {
    return this.sessionRepository.deleteByUserId(userId);
  }

  deleteByUserIdWithExclude(
    userId: number,
    excludeSessionId: number,
  ): Promise<void> {
    return this.sessionRepository.deleteByUserIdWithExclude(
      userId,
      excludeSessionId,
    );
  }
}
