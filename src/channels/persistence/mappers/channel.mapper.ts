import { applyAbstractEntity, applyAbstractModel } from '@app/utils';

import { Channel, ChannelEntity } from '@app/channels';

export class ChannelMapper {
  static toDomain(raw: ChannelEntity): Channel {
    const channel = new Channel();
    applyAbstractEntity(channel, raw);

    channel.uid = raw.uid;
    channel.type = raw.type;
    channel.guildId = raw.guildId;

    return channel;
  }

  static toPersistence(channel: Channel): ChannelEntity {
    const channelEntity = new ChannelEntity();
    applyAbstractModel(channelEntity, channel);

    channelEntity.uid = channel.uid;
    channelEntity.type = channel.type;
    channelEntity.guildId = channel.guildId;

    return channelEntity;
  }
}
