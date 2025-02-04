import { Module } from '@nestjs/common';

import { GuildsController } from './guilds.controller';
import { GuildPersistenceModule } from './persistence/relational-persistence.module';
import { GuildService } from './service/guild.service';

@Module({
  imports: [GuildPersistenceModule],
  controllers: [GuildsController],
  providers: [GuildService],
  exports: [GuildService, GuildPersistenceModule],
})
export class GuildsModule {}
