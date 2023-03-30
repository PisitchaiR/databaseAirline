import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlaneService } from './plane.service';
import { PlaneDto } from './plane.dto';

@Controller('plane')
export class PlaneController {
  constructor(private readonly planeService: PlaneService) {}

  @Get('/:id')
  async findAll(@Param('id') id: string): Promise<PlaneDto[]> {
    return await this.planeService.findByAirlineId(id);
  }

  @Post('/')
  async create(@Body() data: PlaneDto) {
    return await this.planeService.create(data);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() data: PlaneDto) {
    return await this.planeService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.planeService.delete(id);
  }
}
