import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlaneDto } from './plane.dto';

@Injectable()
export class PlaneService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<PlaneDto> {
    return await this.prisma.plane.findUnique({
      where: { id },
    });
  }

  async findByName(name: string): Promise<PlaneDto> {
    return await this.prisma.plane.findUnique({
      where: { name },
    });
  }

  async getAllPlanes(): Promise<PlaneDto[]> {
    return await this.prisma.plane.findMany();
  }

  async findByAirlineId(airlineId: string): Promise<PlaneDto[]> {
    return await this.prisma.plane.findMany({
      where: { airlineId },
    });
  }

  async create(data: PlaneDto): Promise<PlaneDto> {
    const findPlane = await this.findByName(data.name);
    if (findPlane) throw new BadRequestException('Plane already exists');
    return await this.prisma.plane.create({
      data,
    });
  }

  async update(id: string, data: PlaneDto): Promise<PlaneDto> {
    const findPlane = await this.findById(id);
    if (!findPlane) throw new BadRequestException('Plane not found');
    return await this.prisma.plane.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<PlaneDto> {
    const findPlane = await this.findById(id);
    if (!findPlane) throw new BadRequestException('Plane not found');
    return await this.prisma.plane.delete({
      where: { id },
    });
  }
}
