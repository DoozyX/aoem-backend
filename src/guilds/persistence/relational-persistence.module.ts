import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GuildEntity, GuildRepository } from '@app/guilds';
import { GuildRelationalRepository } from './repositories/guild.relational.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GuildEntity])],
  providers: [
    {
      provide: GuildRepository,
      useClass: GuildRelationalRepository,
    },
  ],
  exports: [GuildRepository],
})
export class GuildPersistenceModule {}
