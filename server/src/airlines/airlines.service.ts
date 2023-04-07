import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AirlinesDto, CreateAirline } from './airlines.dto';

@Injectable()
export class AirlinesService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<AirlinesDto> {
    return await this.prisma.airline.findUnique({
      where: { id },
      include: {
        Flight: {
          include: {
            Reservation: true,
          },
        },
        Plane: true,
      },
    });
  }

  async findByName(nameTh: string, nameEn: string): Promise<AirlinesDto[]> {
    return await this.prisma.airline.findMany({
      where: {
        AND: [{ nameTh: nameTh }, { nameEn: nameEn }],
      },
    });
  }

  async create(data: CreateAirline): Promise<CreateAirline> {
    const findAirline = await this.findByName(data.nameTh, data.nameEn);
    if (findAirline.length > 0)
      throw new BadRequestException('Airline already exists');
    return await this.prisma.airline.create({
      data,
    });
  }
}
