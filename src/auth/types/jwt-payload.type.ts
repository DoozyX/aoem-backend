import { RoleEnum } from '@app/roles';
import { StatusEnum } from '@app/statuses';

export interface JwtPayloadType {
  id: number;
  role: RoleEnum;
  status: StatusEnum;
  sessionId: number;
  iat: number;
  exp: number;
}
