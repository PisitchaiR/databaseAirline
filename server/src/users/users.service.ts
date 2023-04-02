import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto, UserDto } from './user.dto';
import { hash, verify } from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async findByEmail(email: string): Promise<UserDto> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string): Promise<UserDto> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        airline: true,
      },
    });
  }

  async getReservation(id: string): Promise<any> {
    return await this.prisma.reservation.findMany({
      where: { userId: id },
    });
  }

  async getCoupon(id: string): Promise<any> {
    const coupon = await this.prisma.collectCoupon.findMany({
      where: { userId: id },
      select: {
        id: true,
        Coupon: true,
      },
    });
    const result = [];
    coupon.map((item) => {
      result.push({ ...item.Coupon, collectCouponId: item.id });
    });
    return result;
  }

  async login(data: LoginUserDto): Promise<any> {
    const findUser = await this.findByEmail(data.email);
    if (!findUser) throw new BadRequestException('Email not found');

    const isValid = await verify(findUser?.password, data.password);
    if (!isValid) throw new BadRequestException("Password doesn't match");

    delete findUser.password;

    return findUser;
  }

  async createUser(data: Pick<UserDto, 'email' | 'password'>): Promise<any> {
    const findUser = await this.findByEmail(data.email);
    if (findUser) throw new ConflictException('Email already exists');

    const hashedPassword = await hash(data.password);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });

    delete user.password;

    return user;
  }
}
