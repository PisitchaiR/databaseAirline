import { Module } from '@nestjs/common';
import { AirlinesController } from './airlines.controller';
import { AirlinesService } from './airlines.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AirlinesController],
  providers: [AirlinesService, PrismaService],
})
export class AirlinesModule {}
