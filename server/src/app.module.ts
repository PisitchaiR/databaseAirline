import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AirlinesModule } from './airlines/airlines.module';
import { PlaneModule } from './plane/plane.module';
import { FlightModule } from './flight/flight.module';
import { AirportModule } from './airport/airport.module';
import { CouponModule } from './coupon/coupon.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [UsersModule, AirlinesModule, PlaneModule, FlightModule, AirportModule, CouponModule, ReservationModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
