import { Channel, ChannelType } from '@app/channels';

export type CreateChannel = Omit<
  Channel,
  'createdAt' | 'deletedAt' | 'updatedAt' | 'id' | 'guild'
>;

export abstract class ChannelRepository {
  abstract create(data: CreateChannel): Promise<Channel>;
  abstract findAll(): Promise<Channel[]>;
  abstract findById(id: number): Promise<Channel | null>;
  abstract findByUid(uid: string): Promise<Channel | null>;
  abstract findByTypeAndGuild(
    type: ChannelType,
    guildId: number,
  ): Promise<Channel | null>;
  abstract findByIds(ids: number[]): Promise<Channel[]>;
  abstract remove(id: number): Promise<void>;
}
