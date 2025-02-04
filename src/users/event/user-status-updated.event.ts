import { User } from '../domain/user';

export class UserStatusUpdatedEvent {
  static readonly namespace = 'user';
  static readonly eventName = 'status-updated';
  static readonly fullEventName = `${UserStatusUpdatedEvent.namespace}.${UserStatusUpdatedEvent.eventName}`;

  constructor(
    public readonly actorId: number,
    public readonly previousUser: User,
    public readonly user: User,
  ) {}
}
