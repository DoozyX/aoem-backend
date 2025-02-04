import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities/user.entity';
import { UsersRelationalRepository } from './repositories/user.relational.repository';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersRelationalRepository,
    },
  ],
  exports: [UserRepository],
})
export class RelationalUserPersistenceModule {}
