import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { SearchFlight, CreateFlight, FlightDto } from './flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get('/search')
  async searchFlight(@Body() data: SearchFlight): Promise<FlightDto[]> {
    return this.flightService.findBySearch(data);
  }

  @Post('/')
  async createFlight(@Body() data: CreateFlight): Promise<FlightDto> {
    return this.flightService.createFlight(data);
  }
}
