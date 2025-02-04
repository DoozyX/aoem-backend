import { Guild } from '@app/guilds';

export type CreateGuild = Omit<
  Guild,
  'createdAt' | 'deletedAt' | 'updatedAt' | 'id'
>;
export abstract class GuildRepository {
  abstract create(data: CreateGuild): Promise<Guild>;
  abstract findAll(): Promise<Guild[]>;
  abstract findById(id: number): Promise<Guild | null>;
  abstract findByIds(ids: number[]): Promise<Guild[]>;
}
