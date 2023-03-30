export class ReservationDto {
  flightId: string;
  userId: string;
  seat: number;
  totalPrice: number;
  couponId?: string;
}
