import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [FlightService, PrismaService],
  controllers: [FlightController],
})
export class FlightModule {}
