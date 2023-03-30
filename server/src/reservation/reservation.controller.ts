import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReservationService } from './reservation.service';
import { ReservationDto } from './reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationservice: ReservationService) {}

  @Get()
  async getAll(): Promise<ReservationDto[]> {
    return await this.reservationservice.getAll();
  }

  @Post()
  async create(@Body() data: ReservationDto): Promise<ReservationDto> {
    return await this.reservationservice.create(data);
  }
}
