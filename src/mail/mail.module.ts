import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MailerModule } from '@app/mailer/mailer.module';
import { UsersModule } from '@app/users/users.module';

import { MailEventListener } from './event/mail.event-listener';
import { MailService } from './service/mail.service';

@Module({
  imports: [ConfigModule, MailerModule, UsersModule],
  providers: [MailService, MailEventListener],
  exports: [MailService],
})
export class MailModule {}
