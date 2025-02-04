export interface JwtRefreshPayloadType {
  sessionId: number;
  hash: string;
  iat: number;
  exp: number;
}
