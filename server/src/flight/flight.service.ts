import { BadRequestException, Injectable } from '@nestjs/common';
import {
  FlightDto,
  CreateFlight,
  UpdateFlight,
  SearchFlight,
} from './flight.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlightService {
  constructor(private prisma: PrismaService) {}

  async findFlightById(id: string): Promise<FlightDto> {
    return this.prisma.flight.findUnique({
      where: {
        id,
      },
    });
  }

  async findFlightByAirlineId(id: string): Promise<FlightDto[]> {
    return this.prisma.flight.findMany({
      where: {
        airlineId: id,
      },
    });
  }

  async findByName(name: string): Promise<FlightDto> {
    return this.prisma.flight.findUnique({
      where: {
        name,
      },
    });
  }

  async findBySearch(data: SearchFlight): Promise<FlightDto[]> {
    if (data.type == undefined)
      throw new BadRequestException('Type is required');

    return this.prisma.flight.findMany({
      where: {
        OR: [
          {
            departureDate: {
              gte: data.departureDate,
            },
          },
          {
            arrivalDate: {
              lte: data.arrivalDate,
            },
          },
        ],

        fromAirportId: data.fromAirportId,
        toAirportId: data.toAirportId,
        type: data.type,
      },
    });
  }

  async createFlight(data: CreateFlight): Promise<FlightDto> {
    const findFlight = await this.findByName(data.name);
    console.log(findFlight);
    if (findFlight) throw new BadRequestException('Flight already exists');
    return this.prisma.flight.create({
      data,
    });
  }

  async updateFlight(id: string, data: UpdateFlight): Promise<FlightDto> {
    return this.prisma.flight.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteFlight(id: string): Promise<FlightDto> {
    return this.prisma.flight.delete({
      where: {
        id,
      },
    });
  }
}
