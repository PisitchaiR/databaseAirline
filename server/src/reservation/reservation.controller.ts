import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

  @Get('/airline/:id')
  async getReservationByAirlineId(
    @Param('id') airlineId: string,
  ): Promise<ReservationDto[]> {
    return await this.reservationservice.getReservationByAirlineId(airlineId);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<ReservationDto> {
    return await this.reservationservice.getById(id);
  }
}
