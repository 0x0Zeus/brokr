export interface IFlight {
  id: string;
  price: number;
  currency: string;
  seats: number;
  departure: IAirportInfo;
  arrival: IAirportInfo;
}

interface IAirportInfo {
  airport: string;
  location: string;
  time: string;
}
