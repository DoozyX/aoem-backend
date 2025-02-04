import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { HomeService } from './service/home.service';

@ApiTags('Home')
@Controller()
export class HomeController {
  constructor(private service: HomeService) {}

  @Get()
  appInfo(): { name: string } {
    return this.service.appInfo();
  }
}
