import { IAirportInfo } from './flight';

export interface IFlightDetails {
  id: string;
  price: number;
  bookingMethods: string[];
  carrierName: string;
  carrierLogo: string;
  currency: string;
  luggage: IFlightLuggage;
  seats: number;
  departure: IAirportInfo;
  arrival: IAirportInfo;
}

interface IFlightLuggage {
  type: string;
  amount: number;
  weight: string;
  dimensions: string;
}
