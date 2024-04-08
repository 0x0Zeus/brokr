export interface ICarDetails {
  id: string;
  photo: string;
  address: string;
  reviews: string;
  price: number;
  currency: string;
  description: string;
  city: string;
  extras: string[];
  days: number;
  model: string;
  supplier: {
    photo: string;
    name: string;
  };
  rating: number | null;
  specs: ICarDetailsSpec[];
}

export interface ICarDetailsSpec {
  name: string;
  value: string;
}
