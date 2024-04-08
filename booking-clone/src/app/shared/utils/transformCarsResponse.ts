import { ICarDetailsResponse } from '@shared/interfaces/cars/carDetailsResponse';
import { ISearchCarsResponseItem } from '@shared/interfaces/cars/carsResponse';
import { ICarsDestinationResponse } from '@shared/interfaces/cars/destinationsResponse';
import { ICarReviewResponse } from '@shared/interfaces/cars/reviewsResponse';
import { ICar } from '@shared/models/cars/car';
import { ICarDetails } from '@shared/models/cars/carDetails';
import { ICarsDestination } from '@shared/models/cars/destination';
import { ICarReview } from '@shared/models/cars/review';

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

export const getTransformedCarData = (
  car: ISearchCarsResponseItem,
  searchKey: string
): ICar => {
  const carData = {
    id: car.vehicle_id,
    photo: car.vehicle_info.image_thumbnail_url,
    location: car.supplier_info.address,
    model: car.vehicle_info.v_name,
    rating: Number((car.rating_info.average / 2).toFixed(1)),
    price: car.pricing_info.price,
    currency: car.pricing_info.currency,
    supplier: car.supplier_info.name,
    seats: car.vehicle_info.seats,
    latitude: Number(car.supplier_info.latitude),
    longitude: Number(car.supplier_info.longitude),
    searchKey,
  };
  return carData;
};

export const getTransformedCarDetails = (
  stay: ICarDetailsResponse
): ICarDetails => {
  const details = stay.data;

  const stayDetailsData = {
    id: details.vehicle.id,
    photo: details.vehicle.imageUrl,
    address: details.depots.pickup.address,
    reviews: details.content.reviews
      ? details.content.reviews.supplier.rating.subtitle.split(' ')[0]
      : 'unknown',
    description: details.importantInfo.subtitle,
    city: details.depots.pickup.city,
    price: Number(
      (
        details.vehicle.price.display.value *
        details.vehicle.rentalDurationInDays
      ).toFixed(2)
    ),
    currency:details.vehicle.price.display.currency,
    extras: details.extras.map((item) => item.name),
    days: details.vehicle.rentalDurationInDays,
    model: details.vehicle.makeAndModel,
    supplier: {
      photo: details.content.carCard.supplier.imageUrl,
      name: details.content.carCard.supplier.name,
    },
    rating: details.supplier.rating
      ? Number((details.supplier.rating / 2).toFixed(1))
      : null,
    specs: [
      {
        name: 'Fuel Policy',
        value: details.vehicle.specification.fuelPolicy,
      },
      { name: 'Mileage', value: details.vehicle.specification.mileage },
      {
        name: 'Transmission',
        value: details.vehicle.specification.transmission,
      },
      {
        name: 'Number Of Doors',
        value: details.vehicle.specification.numberOfDoors,
      },
      {
        name: 'Small Suitcases',
        value: String(details.vehicle.specification.smallSuitcases),
      },
      {
        name: 'Big Suitcases',
        value: String(details.vehicle.specification.bigSuitcases),
      },
      {
        name: 'Number Of Seats',
        value: details.vehicle.specification.numberOfSeats,
      },
      {
        name: 'Air Conditioning',
        value: String(details.vehicle.specification.airConditioning),
      },
    ],
  };
  return stayDetailsData;
};

export const getTransformedCarReview = (
  review: ICarReviewResponse
): ICarReview => {
  const transformedReview = {
    rating: Number((Number(review.rating) / 2).toFixed(1)),
    positive: review.positive ?? '',
    date: review.date,
    negative: review.negative ?? '',
  };

  return transformedReview;
};
