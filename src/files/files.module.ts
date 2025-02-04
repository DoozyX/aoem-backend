import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { AuthModule } from '@app/auth/auth.module';
import { FilesLocalController } from './files.controller';
import { RelationalFilePersistenceModule } from './persistence/relational-persistence.module';
import { FilesService } from './service/files.service';

@Module({
  imports: [
    RelationalFilePersistenceModule,
    MulterModule.register(),
    AuthModule,
    AuthModule,
  ],
  controllers: [FilesLocalController],
  providers: [FilesService],
  exports: [FilesService, RelationalFilePersistenceModule],
})
export class FilesModule {}
