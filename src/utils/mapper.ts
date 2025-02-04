import { AbstractEntity } from './abstract-entity';
import { AbstractModel } from './base-model';

export function applyAbstractModel(
  entity: AbstractEntity,
  model: AbstractModel,
): void {
  if (model.id) entity.id = model.id;
  entity.createdAt = model.createdAt;
  entity.updatedAt = model.updatedAt;
  entity.deletedAt = model.deletedAt;
}

export function applyAbstractEntity(
  model: AbstractModel,
  entity: AbstractEntity,
): void {
  model.id = entity.id;
  model.createdAt = entity.createdAt;
  model.updatedAt = entity.updatedAt;
  model.deletedAt = entity.deletedAt;
}
