import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HeaderResolver, I18nModule as nest_I18nModule } from 'nestjs-i18n';

import { AllConfigType } from '@app/config';

@Module({
  imports: [
    nest_I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
          infer: true,
        }),
        loaderOptions: { path: __dirname, watch: true },
        // uncomment to generate types
        // typesOutputPath: path.join(
        //   __dirname,
        //   '../../src/i18n/generated/i18n.generated.ts',
        // ),
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (
            configService: ConfigService<AllConfigType>,
          ): string[] => {
            return [
              configService.get('app.headerLanguage', {
                infer: true,
              })!,
            ];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
})
export class I18nModule {}
