import {
  ConsoleLogger,
  ConsoleLoggerOptions,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AllConfigType } from '@app/config';
import { LogsService } from './service/logs.service';
import { getLogLevels } from './utils/get-log-levels';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  private readonly logsService: LogsService;

  constructor(
    context: string,
    options: ConsoleLoggerOptions,
    configService: ConfigService<AllConfigType>,
    logsService: LogsService,
  ) {
    const environment = configService.getOrThrow('app.nodeEnv', {
      infer: true,
    });

    super(context, {
      ...options,
      logLevels: getLogLevels(environment === 'production'),
    });

    this.logsService = logsService;
  }

  log(message: string, context?: string): void {
    super.log.apply(this, [message, context]);

    this.logsService
      .createLog({
        message,
        context: context ?? '',
        level: 'log',
      })
      .catch((error) => {
        console.error('Error while sending log to New Relic:', error);
      });
  }
  error(message: string, stack?: string, context?: string): void {
    super.error.apply(this, [message, stack, context]);

    this.logsService
      .createLog({
        message,
        context: context ?? '',
        level: 'error',
      })
      .catch((error) => {
        console.error('Error while sending log to New Relic:', error);
      });
  }
  warn(message: string, context?: string): void {
    super.warn.apply(this, [message, context]);

    void this.logsService.createLog({
      message,
      context: context ?? '',
      level: 'error',
    });
  }
  debug(message: string, context?: string): void {
    super.debug.apply(this, [message, context]);

    this.logsService
      .createLog({
        message,
        context: context ?? '',
        level: 'error',
      })
      .catch((error) => {
        console.error('Error while sending log to New Relic:', error);
      });
  }
  verbose(message: string, context?: string): void {
    super.debug.apply(this, [message, context]);

    this.logsService
      .createLog({
        message,
        context: context ?? '',
        level: 'error',
      })
      .catch((error) => {
        console.error('Error while sending log to New Relic:', error);
      });
  }
}
