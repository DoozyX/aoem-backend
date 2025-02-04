import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionEntity } from './entities/session.entity';
import { SessionRelationalRepository } from './repositories/session.relational.repository';
import { SessionRepository } from './repositories/session.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  providers: [
    {
      provide: SessionRepository,
      useClass: SessionRelationalRepository,
    },
  ],
  exports: [SessionRepository],
})
export class RelationalSessionPersistenceModule {}
