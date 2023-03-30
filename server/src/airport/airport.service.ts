import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AirportDto } from './airport.dto';

@Injectable()
export class AirportService {
  constructor(private prisma: PrismaService) {}

  async getAllAirports(): Promise<AirportDto[]> {
    return this.prisma.airport.findMany();
  }
}
