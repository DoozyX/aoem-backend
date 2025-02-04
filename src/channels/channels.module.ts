import { Module } from '@nestjs/common';

import { ChannelsController } from './channels.controller';
import { ChannelPersistenceModule } from './persistence/relational-persistence.module';
import { ChannelService } from './service/channel.service';
import { GuildsModule } from '@app/guilds/guilds.module';

@Module({
  imports: [ChannelPersistenceModule, GuildsModule],
  controllers: [ChannelsController],
  providers: [ChannelService],
  exports: [ChannelService, ChannelPersistenceModule],
})
export class ChannelsModule {}
