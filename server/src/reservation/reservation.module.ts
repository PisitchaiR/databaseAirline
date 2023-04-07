import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { PrismaService } from '../prisma/prisma.service';
import { FlightService } from '../flight/flight.service';
import { CouponService } from '../coupon/coupon.service';

@Module({
  providers: [ReservationService, PrismaService, FlightService, CouponService],
  controllers: [ReservationController],
})
export class ReservationModule {}