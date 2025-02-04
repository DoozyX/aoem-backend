import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../../config/config.type';

@Injectable()
export class HomeService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  appInfo(): { name: string } {
    return { name: this.configService.get('app.name', { infer: true })! };
  }
}
