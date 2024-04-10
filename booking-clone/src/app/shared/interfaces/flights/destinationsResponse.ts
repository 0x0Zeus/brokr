export interface IFlightsDestinationsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: IFlightsDestinationResponse[];
}

export interface IFlightsDestinationResponse {
  id: string;
  type: string;
  name: string;
  code: string;
  city?: string;
  cityName?: string;
  regionName?: string;
  country: string;
  countryName: string;
  countryNameShort?: string;
  photoUri: string;
  distanceToCity?: DistanceToCity;
  parent?: string;
  region?: string;
}

export interface DistanceToCity {
  value: number;
  unit: string;
}
