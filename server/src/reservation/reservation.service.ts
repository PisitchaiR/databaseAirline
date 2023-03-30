import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReservationDto } from './reservation.dto';
import { Prisma } from '@prisma/client';
import { FlightService } from '../flight/flight.service';

@Injectable()
export class ReservationService {
  constructor(
    private prisma: PrismaService,
    private readonly flightservice: FlightService,
  ) {}

  async getAll(): Promise<ReservationDto[]> {
    return await this.prisma.reservation.findMany();
  }

  async findSeatReservationInFlight(flightId: string): Promise<any> {
    const allReservation = await this.prisma.reservation.findMany({
      where: {
        flightId: flightId,
      },
    });
    let total = 0;
    allReservation.map((item) => {
      total += item.seat;
    });
    return total;
  }

  async create(data: ReservationDto): Promise<ReservationDto> {
    const numberSeat = await this.flightservice.findById(data.flightId);

    const totalSeat = await this.findSeatReservationInFlight(data.flightId);

    if (numberSeat.seat - totalSeat < data.seat)
      throw new BadRequestException('Not enough seat');

    return await this.prisma.reservation.create({
      data,
    });
  }
}
