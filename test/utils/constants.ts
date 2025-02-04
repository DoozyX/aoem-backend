export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_PORT = process.env.MAIL_CLIENT_PORT;

export class AuthCredentials {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

export const TESTER_AUTH = new AuthCredentials('user@doozyx.com', 'secret');
export const ARCHIVER_AUTH = new AuthCredentials(
  'archiver@doozyx.com',
  'secret',
);
export const ADMIN_AUTH = new AuthCredentials('admin@doozyx.com', 'secret');
export const APPROVER_AUTH = new AuthCredentials(
  'approver@doozyx.com',
  'secret',
);
export const DIRECTOR_AUTH = new AuthCredentials(
  'director@doozyx.com',
  'secret',
);
export const SUPER_ADMIN_AUTH = new AuthCredentials(
  'superadmin@doozyx.com',
  'secret',
);
