import { User } from '../domain/user';

export class UserCreatedEvent {
  static readonly namespace = 'user';
  static readonly eventName = 'created';
  static readonly fullEventName = `${UserCreatedEvent.namespace}.${UserCreatedEvent.eventName}`;

  constructor(public readonly user: User) {}
}
