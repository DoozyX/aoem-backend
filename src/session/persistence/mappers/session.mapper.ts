import { applyAbstractEntity, applyAbstractModel } from '@app/utils';

import { Session } from '../../domain/session';
import { SessionEntity } from '../entities/session.entity';

export class SessionMapper {
  static toDomain(raw: SessionEntity): Session {
    const session = new Session();
    applyAbstractEntity(session, raw);
    session.userId = raw.userId;
    session.hash = raw.hash;
    session.createdAt = raw.createdAt;
    session.updatedAt = raw.updatedAt;
    session.deletedAt = raw.deletedAt;
    return session;
  }

  static toPersistence(session: Session): SessionEntity {
    const sessionEntity = new SessionEntity();
    applyAbstractModel(sessionEntity, session);

    sessionEntity.hash = session.hash;

    sessionEntity.userId = session.userId;

    return sessionEntity;
  }
}
