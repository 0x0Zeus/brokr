export interface ICarDetails {
  id: string;
  photo: string;
  address: string;
  reviews: string;
  price: number;
  currency: string;
  description: string;
  city: string;
  extras: ICarExtraDetails[];
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

export interface ICarExtraDetails {
  name: string;
  price: number;
}
