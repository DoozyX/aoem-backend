export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export interface AppConfig {
  nodeEnv: Environment;
  name: string;
  workingDirectory: string;
  frontendDomain?: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
  newRelicLicenseKey: string | null;
  redisHost: string;
  redisPort: number;
}
