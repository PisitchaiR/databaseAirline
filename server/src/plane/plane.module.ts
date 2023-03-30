import { Module } from '@nestjs/common';
import { PlaneService } from './plane.service';
import { PlaneController } from './plane.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PlaneService, PrismaService],
  controllers: [PlaneController],
})
export class PlaneModule {}
