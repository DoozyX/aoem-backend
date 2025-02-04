import { StatusEntity } from '@app/statuses';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusSeedService } from './status-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatusEntity])],
  providers: [StatusSeedService],
  exports: [StatusSeedService],
})
export class StatusSeedModule {}
