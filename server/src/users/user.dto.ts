import { Role } from '@prisma/client';

export class LoginUserDto {
  email: string;
  password: string;
}

export class UserDto {
  id: string;
  email: string;
  password: string;
  role: Role;
  airlineId?: string;
}
