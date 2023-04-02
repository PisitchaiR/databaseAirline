export type Login = {
  email: string;
  password: string;
};

export type Register = {
  email: string;
  password: string;
  confirmPassword: string;
};

export class SearchFlight {
  departDate: string;
  departAirport: string;
  arriveAirport: string;
  airlineId: string;
  arriveDate: string;

  constructor() {
    this.departDate = "";
    this.departAirport = "";
    this.arriveAirport = "";
    this.airlineId = "";
    this.arriveDate = "";
  }
}

export class CreatePlane {
  name: string;
  seat: number;
  airlineId: string;
  constructor() {
    this.airlineId = "";
    this.name = "";
    this.seat = 0;
  }
}

export class CreateFlight {
  flightNo: string;
  departDate: string;
  arriveDate: string;
  departAirportId: string;
  arriveAirportId: string;
  price: number;
  seat: number;
  planeId: string;
  airlineId: string;
  constructor() {
    this.airlineId = "";
    this.flightNo = "";
    this.departDate = "";
    this.arriveDate = "";
    this.departAirportId = "";
    this.arriveAirportId = "";
    this.price = 0.0;
    this.seat = 0;
    this.planeId = "";
  }
}
