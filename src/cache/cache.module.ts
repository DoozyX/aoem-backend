import { AllConfigType } from '@app/config';
import { CacheModule as CacheManagerModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-ioredis-yet';

import { CacheService } from './service/cache.service';

@Module({
  imports: [
    CacheManagerModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService<AllConfigType>) => ({
        store: await redisStore({
          host: configService.get('app.redisHost', { infer: true }),
          port: configService.get('app.redisPort', { infer: true }),
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
