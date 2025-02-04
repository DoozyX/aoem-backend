import { Module } from '@nestjs/common';

import { CacheModule } from '@app/cache/cache.module';

import { SessionEventListener } from './event/session.event-listener';
import { RelationalSessionPersistenceModule } from './persistence/relational-persistence.module';
import { SessionService } from './service/session.service';

@Module({
  imports: [RelationalSessionPersistenceModule, CacheModule],
  providers: [SessionService, SessionEventListener],
  exports: [SessionService, RelationalSessionPersistenceModule],
})
export class SessionModule {}
