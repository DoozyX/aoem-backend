import { LogLevel } from '@nestjs/common';

export class Log {
  public context: string;

  public message: string;

  public level: LogLevel;
}
