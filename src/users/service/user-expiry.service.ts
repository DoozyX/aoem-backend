import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { StatusEnum } from '@app/statuses';
import { UserRepository } from '../persistence/repositories/user.repository';

@Injectable()
export class UserExpiryService {
  private readonly logger = new Logger(UserExpiryService.name);

  constructor(private readonly usersRepository: UserRepository) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron(): Promise<void> {
    this.logger.log('Checking for expired users');
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    const users =
      await this.usersRepository.findLastUpdatedAtBefore(oneYearAgo);
    this.logger.log(`Found ${users.length} users to update status`);
    if (users.length > 0) {
      const userIds = users.map((user) => user.id);
      await this.usersRepository.updateManyStatus(userIds, StatusEnum.expired);
      this.logger.log(`Updated status to expired for ${users.length} users`);
    } else {
      this.logger.log('No users found for status update');
    }
  }
}
