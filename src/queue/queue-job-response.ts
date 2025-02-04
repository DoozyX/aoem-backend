import { ApiProperty } from '@nestjs/swagger';

export enum JobState {
  completed = 'completed',
  failed = 'failed',
  active = 'active',
  delayed = 'delayed',
  prioritized = 'prioritized',
  waiting = 'waiting',
  waitingChildren = 'waiting-children',
  unknown = 'unknown',
}

export class JobResponse<DataType> {
  /**
   * The name of the job.
   */
  @ApiProperty()
  name: string;
  /**
   * The payload for this job.
   */
  @ApiProperty()
  data: DataType;
  /**
   * The options object for this job.
   */
  @ApiProperty()
  id: string;
  /**
   * The progress a job has performed so far.
   * @defaultValue 0
   */
  @ApiProperty()
  progress: number | object;
  /**
   * Timestamp when the job was created (unless overridden with job options).
   */
  @ApiProperty()
  timestamp: number;

  /**
   * The state of the job.
   */
  @ApiProperty({ enum: JobState })
  state: JobState;
}
