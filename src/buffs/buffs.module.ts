import { Module } from '@nestjs/common';

import { BuffsController } from './buffs.controller';
import { BuffPersistenceModule } from './persistence/relational-persistence.module';
import { BuffService } from './service/buff.service';
import { GuildsModule } from '@app/guilds/guilds.module';
import { ChannelsModule } from '@app/channels/channels.module';

@Module({
  imports: [BuffPersistenceModule, GuildsModule, ChannelsModule],
  controllers: [BuffsController],
  providers: [BuffService],
  exports: [BuffService, BuffPersistenceModule],
})
export class BuffsModule {}
