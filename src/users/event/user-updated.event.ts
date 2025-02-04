import { User } from '../domain/user';

export class UserUpdatedEvent {
  static readonly namespace = 'user';
  static readonly eventName = 'updated';
  static readonly fullEventName = `${UserUpdatedEvent.namespace}.${UserUpdatedEvent.eventName}`;

  constructor(
    public readonly actorId: number,
    public readonly previousUser: User,
    public readonly user: User,
  ) {}
}
