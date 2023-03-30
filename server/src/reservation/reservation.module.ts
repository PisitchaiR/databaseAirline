import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { FlightService } from '../flight/flight.service';

@Module({
  providers: [ReservationService, PrismaService, FlightService],
  controllers: [ReservationController],
})
export class ReservationModule {}
