import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { CacheService } from '@app/cache';
import { UserStatusUpdatedEvent } from '@app/users';

import { tokenKey } from '@app/auth/util';
import { SessionRepository } from '../persistence/repositories/session.repository';

@Injectable()
export class SessionEventListener {
  constructor(
    private readonly sessionRepository: SessionRepository,
    private readonly cacheService: CacheService,
  ) {}

  @OnEvent(UserStatusUpdatedEvent.fullEventName)
  async handleUserStatusUpdated(event: UserStatusUpdatedEvent): Promise<void> {
    const sessions = await this.sessionRepository.findByUserId(event.user.id);
    for (const session of sessions) {
      const key = tokenKey(event.user.id, session.id);
      await this.cacheService.del(key);
    }
  }
}
