import { applyAbstractEntity, applyAbstractModel } from '@app/utils';

import { Buff, BuffEntity } from '@app/buffs';

export class BuffMapper {
  static toDomain(raw: BuffEntity): Buff {
    const buff = new Buff();
    applyAbstractEntity(buff, raw);

    buff.type = raw.type;
    buff.guildId = raw.guildId;
    buff.member = raw.member;

    return buff;
  }

  static toPersistence(buff: Buff): BuffEntity {
    const buffEntity = new BuffEntity();
    applyAbstractModel(buffEntity, buff);

    buffEntity.type = buff.type;
    buffEntity.guildId = buff.guildId;
    buffEntity.member = buff.member;

    return buffEntity;
  }
}
