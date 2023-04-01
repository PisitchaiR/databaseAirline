export class ReservationDto {
  flightId: string;
  userId: string;
  seat: number;
  totalPrice: number;
  couponId?: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export class CreateReservationDto extends ReservationDto {
  flightId: string;
  userId: string;
  seat: number;
  totalPrice: number;
  couponId?: string;
  firstName: string;
  lastName: string;
  phone: string;
  collectCouponId?: string | null;
}
