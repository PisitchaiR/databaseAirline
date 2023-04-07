import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [AirportService, PrismaService],
  controllers: [AirportController],
})
export class AirportModule {}
