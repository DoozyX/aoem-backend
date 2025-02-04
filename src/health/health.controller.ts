import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('Health')
@Controller({
  path: 'health',
  version: '1',
})
export class HealthController {
  constructor(
    private healthCheckService: HealthCheckService,
    private typeOrmHealthIndicator: TypeOrmHealthIndicator,
    private memoryHealthIndicator: MemoryHealthIndicator,
    private diskHealthIndicator: DiskHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      (): Promise<HealthIndicatorResult> =>
        this.typeOrmHealthIndicator.pingCheck('database'),
      // the process should not use more than 300MB memory
      (): Promise<HealthIndicatorResult> =>
        this.memoryHealthIndicator.checkHeap('memory heap', 300 * 1024 * 1024),
      // The process should not have more than 300MB RSS memory allocated
      (): Promise<HealthIndicatorResult> =>
        this.memoryHealthIndicator.checkRSS('memory RSS', 300 * 1024 * 1024),
      // the used disk storage should not exceed the 50% of the available space
      (): Promise<HealthIndicatorResult> =>
        this.diskHealthIndicator.checkStorage('storage', {
          thresholdPercent: 0.9,
          path: '/',
        }),
    ]);
  }
}
