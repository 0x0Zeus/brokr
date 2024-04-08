export interface IAttrDestinationsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  products: Product[];
  destinations: IAttrDestinationResponse[];
}

interface Product {
  id: string;
  __typename: string;
  title: string;
  productId: string;
  productSlug: string;
  taxonomySlug: string;
  cityUfi: number;
  cityName: string;
  countryCode: string;
}

export interface IAttrDestinationResponse {
  id: string;
  __typename: string;
  ufi: number;
  country: string;
  cityName: string;
  productCount: number;
  cc1: string;
}
