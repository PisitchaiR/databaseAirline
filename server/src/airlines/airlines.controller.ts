import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { CreateAirline } from './airlines.dto';

@Controller('airlines')
export class AirlinesController {
  constructor(private readonly airlineService: AirlinesService) {}

  @Post('/')
  async create(@Body() data: CreateAirline) {
    const airline = await this.airlineService.create(data);
    return airline;
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const airline = await this.airlineService.findById(id);
    return airline;
  }
}
