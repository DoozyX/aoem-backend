import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FileEntity } from '@app/files';
import { UserEntity } from '@app/users';
import { UserSeedService } from './user-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FileEntity])],
  providers: [UserSeedService],
  exports: [UserSeedService],
})
export class UserSeedModule {}
