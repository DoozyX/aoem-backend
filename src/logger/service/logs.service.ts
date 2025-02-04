import { Injectable } from '@nestjs/common';

import { AllConfigType } from '@app/config';
import { ConfigService } from '@nestjs/config';
import { Log } from '../domain/log';

@Injectable()
export class LogsService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  async createLog(log: Log): Promise<void> {
    const newRelicLicenseKey = this.configService.getOrThrow(
      'app.newRelicLicenseKey',
      {
        infer: true,
      },
    );
    if (newRelicLicenseKey == null) {
      return;
    }
    fetch('https://log-api.eu.newrelic.com/log/v1', {
      headers: {
        'API-Key': newRelicLicenseKey,
      },
      method: 'POST',
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        message: log.message,
        logtype: log.level,
        context: log.context,
      }),
    }).catch((error) => {
      console.error('Error while sending log to New Relic:', error);
    });
  }
}
