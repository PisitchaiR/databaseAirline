import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CouponDto } from './coupon.dto';

@Injectable()
export class CouponService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<CouponDto[]> {
    return await this.prisma.coupon.findMany();
  }

  async deleteClaimCoupon(id: string): Promise<any> {
    return await this.prisma.collectCoupon.delete({
      where: {
        id: id,
      },
    });
  }

  async claimCoupon(
    userId: string,
    couponId: string,
  ): Promise<{ message: string }> {
    const findCoupon = await this.prisma.coupon.findUnique({
      where: {
        id: couponId,
      },
    });

    if (findCoupon.expiredAt < new Date()) {
      throw new Error('coupon expired');
    }

    await this.prisma.collectCoupon.create({
      data: {
        userId: userId,
        couponId: couponId,
      },
    });
    return { message: 'claim coupon success' };
  }
}
