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
  facilities: string[];
  name: string;
  cancellation: {
    type: string;
    before: string | null;
  };
  rating: number;
  specs: IStayDetailsSpecs;
}

interface IPhoto {
  lg: string;
  sm: string;
}

export interface IStayDetailsSpecs {
  square: number;
  bedrooms: number;
  bathrooms: number;
}
