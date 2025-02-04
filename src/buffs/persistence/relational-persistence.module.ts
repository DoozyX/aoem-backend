import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BuffEntity, BuffRepository } from '@app/buffs';
import { BuffRelationalRepository } from './repositories/buff.relational.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BuffEntity])],
  providers: [
    {
      provide: BuffRepository,
      useClass: BuffRelationalRepository,
    },
  ],
  exports: [BuffRepository],
})
export class BuffPersistenceModule {}
