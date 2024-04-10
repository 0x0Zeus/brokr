import {
  IFlightOfferResponse,
  IFlightsDestinationResponse,
} from '@shared/interfaces/flights';
import { IFlight, IFlightsDestination } from '@shared/models/flights';

import { getFullDateFormat } from './dateParser';

export const getTransformedFlightsDestination = (
  destination: IFlightsDestinationResponse
): IFlightsDestination => {
  const locationData = {
    destId: destination.id,
    location: `${destination.name}, ${destination.countryName}`,
  };
  return locationData;
};

export const getTransformedFlightData = (
  flight: IFlightOfferResponse
): IFlight => {
  const flightData = {
    id: flight.token,
    price: flight.priceBreakdown.total.units,
    currency: flight.priceBreakdown.total.currencyCode,
    seats: flight.seatAvailability?.numberOfSeatsAvailable ?? 0,
    departure: {
      airport: flight.segments[0].departureAirport.name,
      location: `${flight.segments[0].departureAirport.cityName}, ${flight.segments[0].departureAirport.countryName}`,
      time: getFullDateFormat(flight.segments[0].departureTime),
    },
    arrival: {
      airport: flight.segments[0].arrivalAirport.name,
      location: `${flight.segments[0].arrivalAirport.cityName}, ${flight.segments[0].arrivalAirport.countryName}`,
      time: getFullDateFormat(flight.segments[0].arrivalTime),
    },
  };
  return flightData;
};
