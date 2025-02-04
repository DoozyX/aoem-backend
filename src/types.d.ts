import { JwtPayloadType } from '@app/auth';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends JwtPayloadType {}
    interface Request {
      user?: User;
    }
  }
}

declare module '*.pdf';
