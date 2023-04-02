import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  async findById(@Param('id') id: string) {
    return await this.flightService.findById(id);
  }

  @Get('/airline/:id')
  async findByAirlineId(@Param('id') id: string) {
    return await this.flightService.findByAirlineId(id);
  }
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.flightService.delete(id);
  }
}
