export interface IStayDetails {
  id: number;
  photo: string;
  location: string;
  review: number;
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
  specifications: {
    square: number;
    bedrooms: number;
    bathrooms: number;
  };
}
