import { AuthConfig } from '../auth/config/auth-config.type';
import { DatabaseConfig } from '../database/config/database-config.type';
import { MailConfig } from '../mail/config/mail-config.type';
import { AppConfig } from './app-config.type';

export interface AllConfigType {
  app: AppConfig;
  auth: AuthConfig;
  database: DatabaseConfig;
  mail: MailConfig;
}
