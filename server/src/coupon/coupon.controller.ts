import { Body, Controller, Get, Post } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponDto } from './coupon.dto';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couopnservice: CouponService) {}

  @Get()
  async getAll(): Promise<CouponDto[]> {
    return await this.couopnservice.getAll();
  }

  @Post('claim')
  async claimCoupon(@Body() data: any): Promise<{ message: string }> {
    return await this.couopnservice.claimCoupon(data.userId, data.couponId);
  }
}
