import { flightType } from '@prisma/client';

export class FlightDto {
  price: number;
  name: string;
  type: flightType;
  departureDate?: Date | string;
  arrivalDate?: Date | string;
  fromAirportId?: string;
  toAirportId?: string;
  airlineId?: string;
  planeId?: string;
}

export class CreateFlight extends FlightDto {
  fromAirportId: string;
  toAirportId: string;
  airlineId: string;
  planeId: string;
}

export class UpdateFlight extends FlightDto {
  fromAirportId?: string;
  toAirportId?: string;
  airlineId?: string;
  planeId?: string;
}

export class SearchFlight extends FlightDto {
  fromAirportId: string;
  toAirportId: string;
  type: flightType;
}
