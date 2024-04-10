import { IPhoto } from '../shared';

export interface IStayDetails {
  id: number;
  photos: IPhoto[];
  location: string;
  reviews: number;
  description: string;
  arrival_date: string;
  departure_date: string;
  nights: number;
  city: string;
  price: number;
  currency: string;
  facilities: string[];
  name: string;
  cancellation: {
    type: string;
    before: string | null;
  };
  rating: number | null;
  specs: IStayDetailsSpecs;
}

export interface IStayDetailsSpecs {
  square: number;
  bedrooms: number;
  bathrooms: number;
}
