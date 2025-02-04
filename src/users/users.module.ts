import { Module, forwardRef } from '@nestjs/common';

import { AuthModule } from '@app/auth/auth.module';

import { RelationalUserPersistenceModule } from './persistence/relational-persistence.module';
import { UserExpiryService } from './service/user-expiry.service';
import { UsersService } from './service/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [RelationalUserPersistenceModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService, UserExpiryService],
  exports: [UsersService, RelationalUserPersistenceModule],
})
export class UsersModule {}
