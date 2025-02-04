import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Buff, BuffEntity, BuffMapper, BuffRepository } from '@app/buffs';
import { BuffType } from '@app/channels';

@Injectable()
export class BuffRelationalRepository implements BuffRepository {
  constructor(
    @InjectRepository(BuffEntity)
    private readonly repository: Repository<BuffEntity>,
  ) {}

  async create(buff: Buff): Promise<Buff> {
    const persistenceModel = BuffMapper.toPersistence(buff);
    const res = await this.repository.insert(persistenceModel);
    const entity = await this.findById(res.identifiers[0].id);
    return entity!;
  }

  async findAll(): Promise<Buff[]> {
    const buffEntities = await this.repository.find();
    return buffEntities.map((buffEntity) => BuffMapper.toDomain(buffEntity));
  }

  async findById(id: number): Promise<Buff | null> {
    const buffEntity = await this.repository.findOne({ where: { id } });
    return buffEntity ? BuffMapper.toDomain(buffEntity) : null;
  }

  async findByTypeAndGuild(type: BuffType, guildId: number): Promise<Buff[]> {
    const buffEntities = await this.repository.find({
      where: { type, guildId },
    });
    return buffEntities.map((buffEntity) => BuffMapper.toDomain(buffEntity));
  }

  async findByIds(ids: number[]): Promise<Buff[]> {
    const buffEntities = await this.repository.find({
      where: { id: In(ids) },
    });

    return buffEntities.map((buffEntity) => BuffMapper.toDomain(buffEntity));
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
