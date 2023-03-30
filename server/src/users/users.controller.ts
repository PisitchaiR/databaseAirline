import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() data: LoginUserDto) {
    const user = await this.usersService.login(data);
    return { user };
  }

  @Post('register')
  async register(@Body() data: LoginUserDto) {
    const user = await this.usersService.createUser(data);
    return { user };
  }
}
