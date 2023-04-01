import { BadRequestException, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { FlightDto, SearchFlight } from './flight.dto';

@Injectable()
export class FlightService {
  constructor(private prisma: PrismaService) {}

  async findBySearch(data: SearchFlight): Promise<FlightDto[]> {
    const endOfDay = new Date(data.departDate);
    endOfDay.setHours(23, 59, 59, 999);
    return await this.prisma.flight.findMany({
      where: {
        AND: [
          { departAirportId: data.departAirportId },
          { arriveAirportId: data.arriveAirportId },
          {
            departDate: {
              gte: data.departDate,
              lt: endOfDay,
            },
          },
        ],
      },
      include: {
        Airline: {
          select: {
            nameTh: true,
            nameEn: true,
          },
        },
        ArriveAirport: {
          select: {
            nameTh: true,
            nameEn: true,
          },
        },
        DepartAirport: {
          select: {
            nameTh: true,
            nameEn: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<FlightDto> {
    return await this.prisma.flight.findUnique({
      where: { id },
      include: {
        Airline: {
          select: {
            nameTh: true,
            nameEn: true,
          },
        },
        ArriveAirport: {
          select: {
            nameTh: true,
            nameEn: true,
          },
        },
        DepartAirport: {
          select: {
            nameTh: true,
            nameEn: true,
          },
        },
      },
    });
  }

  async findBynumber(number: string): Promise<FlightDto> {
    return await this.prisma.flight.findUnique({
      where: {
        flightNo: number,
      },
    });
  }

  async create(data: FlightDto): Promise<FlightDto> {
    const findFlight = await this.findBynumber(data.flightNo);
    if (findFlight) throw new BadRequestException('Flight already exists');

    const create = await this.prisma.flight.create({
      data,
    });

    return create;
  }
}
