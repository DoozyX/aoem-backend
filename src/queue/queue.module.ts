import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AllConfigType } from '@app/config';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        connection: {
          host: configService.get('app.redisHost', { infer: true }),
          port: configService.get('app.redisPort', { infer: true }),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class QueueModule {}
