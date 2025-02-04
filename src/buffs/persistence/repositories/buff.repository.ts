import { Buff } from '@app/buffs';
import { BuffType } from '@app/channels';

export type CreateBuff = Omit<
  Buff,
  'createdAt' | 'deletedAt' | 'updatedAt' | 'id' | 'guild'
>;

export abstract class BuffRepository {
  abstract create(data: CreateBuff): Promise<Buff>;
  abstract findAll(): Promise<Buff[]>;
  abstract findById(id: number): Promise<Buff | null>;
  abstract findByTypeAndGuild(type: BuffType, guildId: number): Promise<Buff[]>;
  abstract findByIds(ids: number[]): Promise<Buff[]>;
  abstract remove(id: number): Promise<void>;
}
