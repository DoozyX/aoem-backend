import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChannelEntity, ChannelRepository } from '@app/channels';
import { ChannelRelationalRepository } from './repositories/channel.relational.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelEntity])],
  providers: [
    {
      provide: ChannelRepository,
      useClass: ChannelRelationalRepository,
    },
  ],
  exports: [ChannelRepository],
})
export class ChannelPersistenceModule {}
