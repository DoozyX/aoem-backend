import { Request } from 'express';

export function getJwtToken(request: Request): string | undefined {
  return request.headers.authorization?.split(' ')[1];
}

export function tokenKey(userId: number, sessionId: number): string {
  return `auth:user:${userId}:session:${sessionId}`;
}
