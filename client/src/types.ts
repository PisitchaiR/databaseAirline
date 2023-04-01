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
