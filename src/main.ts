import '@app/sentry/instrument';

import {
  ClassSerializerInterceptor,
  LogLevel,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import 'dotenv/config';

import { AppModule } from '@app/app.module';
import { Environment } from '@app/config';
import { AllConfigType } from '@app/config/config.type';
import { CustomLogger } from '@app/logger/custom-logger';
import { ResolvePromisesInterceptor, validationOptions } from '@app/utils';

async function bootstrap(): Promise<void> {
  const logLevels: LogLevel[] =
    process.env.NODE_ENV === 'development'
      ? [/*'verbose',  'debug', */ 'log', 'warn', 'error', 'fatal']
      : ['error', 'warn', 'fatal'];

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: logLevels,
  });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const configService = app.get(ConfigService<AllConfigType>);

  app.enableShutdownHooks();
  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    },
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(
    // ResolvePromisesInterceptor is used to resolve promises in responses because class-transformer can't do it
    // https://github.com/typestack/class-transformer/issues/549
    new ResolvePromisesInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
  );

  const env = configService.getOrThrow('app.nodeEnv', { infer: true });
  if (env === Environment.Production) {
    // const frontendDomain = configService.getOrThrow('app.frontendDomain', {
    // infer: true,
    // });

    app.enableCors({
      // TODO(production): enable and test
      // origin: frontendDomain,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      allowedHeaders: 'Content-Type, Authorization',
    });
  } else {
    app.enableCors({
      origin: '*',
    });
  }

  app.useLogger(app.get(CustomLogger));

  const options = new DocumentBuilder()
    .setTitle('MOEPP CITES API')
    .setDescription('MOEPP CITES API docs')
    .setVersion('1.0')
    .addServer(
      configService.getOrThrow('app.backendDomain', { infer: true }),
      'Testing server',
    )
    .addServer(
      'http://localhost:' +
        configService.getOrThrow('app.port', { infer: true }),
      'Local server',
    )
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.getOrThrow('app.port', { infer: true }));
}
void bootstrap();
