import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDto } from './flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  async create(@Body() data: FlightDto) {
    return await this.flightService.create(data);
  }

  @Post('/search')
  async findBySearch(@Body() data: any) {
    return await this.flightService.findBySearch(data);
  }
}
