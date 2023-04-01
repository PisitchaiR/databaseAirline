import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() data: LoginUserDto) {
    return await this.usersService.login(data);
  }

  @Post('register')
  async register(@Body() data: LoginUserDto) {
    return await this.usersService.createUser(data);
  }

  @Get('history/:id')
  async getReservation(@Param('id') id: string) {
    return await this.usersService.getReservation(id);
  }

  @Get('coupon/:id')
  async getCoupon(@Param('id') id: string) {
    return await this.usersService.getCoupon(id);
  }
}
