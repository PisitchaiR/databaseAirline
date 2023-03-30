import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CouponDto } from './coupon.dto';

@Injectable()
export class CouponService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<CouponDto[]> {
    return await this.prisma.coupon.findMany();
  }

  async claimCoupon(
    userId: string,
    couponId: string,
  ): Promise<{ message: string }> {
    await this.prisma.collectCoupon.create({
      data: {
        userId: userId,
        couponId: couponId,
      },
    });
    return { message: 'claim coupon success' };
  }
}
