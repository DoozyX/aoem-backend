import { User } from '@app/users/domain/user';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshResponseType {
  @ApiProperty()
  token: string;
  @ApiProperty()
  refreshToken: string;
  @ApiProperty()
  tokenExpires: number;
}

export class LoginResponseType extends RefreshResponseType {
  @ApiProperty()
  user: User;
}
