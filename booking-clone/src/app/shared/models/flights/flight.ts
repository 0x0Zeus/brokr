export interface IFlight {
  id: string;
  price: number;
  currency: string;
  seats: number;
  departure: IAirportInfo;
  arrival: IAirportInfo;
}

export interface IAirportInfo {
  airport: string;
  location: string;
  time: string;
}
