import { NullableType } from '@app/utils';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { SessionEntity } from '../entities/session.entity';

import { Session } from '../../domain/session';
import { SessionRepository } from './session.repository';

import { SessionMapper } from '../mappers/session.mapper';

@Injectable()
export class SessionRelationalRepository implements SessionRepository {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
  ) {}

  async findById(id: Session['id']): Promise<NullableType<Session>> {
    const entity = await this.sessionRepository.findOne({
      where: { id },
    });

    return entity ? SessionMapper.toDomain(entity) : null;
  }

  async findByUserId(userId: number): Promise<Session[]> {
    const entities = await this.sessionRepository.find({
      where: { userId },
    });

    return entities.map(SessionMapper.toDomain);
  }

  create(data: Session): Promise<Session> {
    const persistenceModel = SessionMapper.toPersistence(data);
    return this.sessionRepository.save(
      this.sessionRepository.create(persistenceModel),
    );
  }

  async update(
    id: Session['id'],
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null> {
    const entity = await this.findById(id);

    if (!entity) {
      throw new NotFoundException();
    }

    const updatedEntity = await this.sessionRepository.save(
      this.sessionRepository.create(
        SessionMapper.toPersistence({
          ...entity,
          ...payload,
        }),
      ),
    );

    return SessionMapper.toDomain(updatedEntity);
  }

  async deleteById(id: Session['id']): Promise<void> {
    await this.sessionRepository.softDelete({
      id: Number(id),
    });
  }

  async deleteByUserId(userId: number): Promise<void> {
    await this.sessionRepository.softDelete({
      userId,
    });
  }

  async deleteByUserIdWithExclude(
    userId: number,
    excludeSessionId: number,
  ): Promise<void> {
    await this.sessionRepository.softDelete({
      user: {
        id: Number(userId),
      },
      id: Not(excludeSessionId),
    });
  }
}
