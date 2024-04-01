export interface ICarsDestinationResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: ICarsDestination[];
}

interface ICarsDestination {
  iata_code: string;
  location_id: null | string;
  city_id: null | string;
  city: string;
  type: string;
  name: string;
  country: string;
  coordinates: ICarsDestinationCoordinates;
}

interface ICarsDestinationCoordinates {
  longitude: number;
  latitude: number;
}
