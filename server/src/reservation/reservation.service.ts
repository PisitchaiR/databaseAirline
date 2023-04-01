import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservationDto, ReservationDto } from './reservation.dto';
import { FlightService } from '../flight/flight.service';
import { CouponService } from '../coupon/coupon.service';

@Injectable()
export class ReservationService {
  constructor(
    private prisma: PrismaService,
    private readonly flightservice: FlightService,
    private readonly couponservice: CouponService,
  ) {}

  async getById(id: string): Promise<ReservationDto> {
    return await this.prisma.reservation.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getAll(): Promise<ReservationDto[]> {
    return await this.prisma.reservation.findMany();
  }

  async findSeatReservationInFlight(flightId: string): Promise<any> {
    const allReservation = await this.prisma.reservation.findMany({
      where: {
        flightId: flightId,
      },
    });
    let total = 0;
    allReservation.map((item) => {
      total += item.seat;
    });
    return total;
  }

  async create(data: CreateReservationDto): Promise<ReservationDto> {
    const numberSeat = await this.flightservice.findById(data.flightId);

    const totalSeat = await this.findSeatReservationInFlight(data.flightId);

    if (numberSeat.seat - totalSeat < data.seat)
      throw new BadRequestException('Not enough seat');

    if (data.collectCouponId) {
      //if coupon is exist
      await this.couponservice.deleteClaimCoupon(data.collectCouponId);
      delete data.collectCouponId;
    }

    const create = await this.prisma.reservation.create({
      data,
    });

    return create;
  }
}
