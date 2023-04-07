import { Controller, Get } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportDto } from './airport.dto';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportservice: AirportService) {}

  @Get()
  async getAllAirports(): Promise<AirportDto[]> {
    return await this.airportservice.getAllAirports();
  }
}
