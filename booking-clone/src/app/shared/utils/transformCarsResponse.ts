import { ISearchCarsResponseItem } from '@shared/interfaces/cars/carsResponse';
import { ICarsDestinationResponse } from '@shared/interfaces/cars/destinationsResponse';
import { ICar } from '@shared/models/cars/car';
import { ICarsDestination } from '@shared/models/cars/destination';

export const getTransformedCarDestinations = (
  destination: ICarsDestinationResponse
): ICarsDestination => {
  let location = '';
  if (destination.name) {
    location += `${destination.name}, `;
  }
  if (destination.city) {
    location += `${destination.city}, `;
  }
  if (destination.country) {
    location += `${destination.country}, `;
  }
  const coordinatesData = {
    ...destination.coordinates,
    location: location.slice(0, -2),
  };
  return coordinatesData;
};

export const getTransformedCarData = (car: ISearchCarsResponseItem): ICar => {
  const carData = {
    id: car.vehicle_id,
    photo: car.vehicle_info.image_thumbnail_url,
    location: car.supplier_info.address,
    model: car.vehicle_info.v_name,
    rating: Number((car.rating_info.average / 2).toFixed(1)),
    price: car.pricing_info.price,
    supplier: car.supplier_info.name,
    seats: car.vehicle_info.seats,
    latitude: Number(car.supplier_info.latitude),
    longitude: Number(car.supplier_info.longitude),
  };
  return carData;
};
