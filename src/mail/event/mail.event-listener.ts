import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { UsersService, UserStatusUpdatedEvent } from '@app/users';

import { StatusEnum } from '@app/statuses';
import { MailService } from '@app/mail';

@Injectable()
export class MailEventListener {
  private readonly logger = new Logger(MailEventListener.name);
  constructor(
    private readonly mailService: MailService,
    private readonly usersService: UsersService,
  ) {}

  @OnEvent(UserStatusUpdatedEvent.fullEventName)
  handleUserStatusUpdated(event: UserStatusUpdatedEvent): void {
    if (
      (event.previousUser.status == StatusEnum.inactive &&
        event.user.status == StatusEnum.verified) ||
      (event.previousUser.status == StatusEnum.verified &&
        event.user.status == StatusEnum.pending)
    ) {
      return;
    }

    this.mailService
      .userStatusUpdated({
        lang: event.user.language,
        to: event.user.email,
        data: {
          status: event.user.status,
          reason: event.user.statusReason,
        },
      })
      .catch((e) => this.logger.error(e));
  }
}
