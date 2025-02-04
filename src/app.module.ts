import { appConfig } from '@app/config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { SentryModule } from '@sentry/nestjs/setup';

import { authConfig } from '@app/auth';
import { AuthModule } from '@app/auth/auth.module';
import { CacheModule } from '@app/cache/cache.module';
import { databaseConfig } from '@app/database';
import { DatabaseModule } from '@app/database/database.module';
import { FilesModule } from '@app/files/files.module';
import { HealthModule } from '@app/health/health.module';
import { HomeModule } from '@app/home/home.module';
import { I18nModule } from '@app/i18n/i18n.module';
import { LogsMiddleware } from '@app/logger';
import { LoggerModule } from '@app/logger/logger.module';
import { mailConfig } from '@app/mail';
import { MailModule } from '@app/mail/mail.module';
import { MailerModule } from '@app/mailer/mailer.module';
import { QueueModule } from '@app/queue/queue.module';
import { SessionModule } from '@app/session/session.module';
import { UsersModule } from '@app/users/users.module';
import { GuildsModule } from '@app/guilds/guilds.module';
import { ChannelsModule } from '@app/channels/channels.module';

@Module({
  imports: [
    SentryModule.forRoot(),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig, mailConfig],
      envFilePath: ['.env'],
    }),
    CacheModule,
    ScheduleModule.forRoot(),
    QueueModule,
    DatabaseModule,
    I18nModule,
    EventEmitterModule.forRoot(),
    UsersModule,
    FilesModule,
    AuthModule,
    SessionModule,
    MailModule,
    MailerModule,
    HomeModule,
    HealthModule,
    GuildsModule,
    ChannelsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
