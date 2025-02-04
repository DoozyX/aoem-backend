import { applyAbstractEntity, applyAbstractModel } from '@app/utils';

import { Guild } from '../../domain/guild';
import { GuildEntity } from '../entities/guild.entity';
export class GuildMapper {
  static toDomain(raw: GuildEntity): Guild {
    const guild = new Guild();
    applyAbstractEntity(guild, raw);

    guild.uid = raw.uid;
    guild.name = raw.name;

    return guild;
  }

  static toPersistence(guild: Guild): GuildEntity {
    const guildEntity = new GuildEntity();
    applyAbstractModel(guildEntity, guild);

    guildEntity.uid = guild.uid;
    guildEntity.name = guild.name;

    return guildEntity;
  }
}
