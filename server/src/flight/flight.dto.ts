export class FlightDto {
  id: string;
  flightNo: string;
  departDate: Date;
  arriveDate: Date;
  departAirportId: string;
  arriveAirportId: string;
  price: number;
  seat: number;
  planeId: string;
  airlineId: string;
}

export class SearchFlight {
  departDate: Date;
  departAirportId: string;
  arriveAirportId: string;
  airlineId: string;
}
