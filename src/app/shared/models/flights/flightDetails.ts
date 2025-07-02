import { IAirportInfo } from './flight';

export interface IFlightDetails {
  id: string;
  price: number;
  bookingMethods: string[];
  carrierName: string;
  carrierLogo: string;
  currency: string;
  luggage: IFlightLuggage[] | null;
  seats: number;
  departure: IAirportInfo;
  arrival: IAirportInfo;
  benefits: string[] | null;
}

export interface IFlightLuggage {
  name: string;
  value: string | number;
}
