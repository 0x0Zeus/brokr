import {
  IFlightOfferResponse,
  IFlightsDestinationResponse,
} from '@shared/interfaces/flights';
import { IFlight, IFlightsDestination } from '@shared/models/flights';

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
    id: flight.offerKeyToHighlight,
    price: flight.priceBreakdown.total.nanos,
    currency: flight.priceBreakdown.total.currencyCode,
    seats: flight.seatAvailability?.numberOfSeatsAvailable ?? 0,
    departureAirport: flight.segments[0].departureAirport.name,
    arrivalAirport: flight.segments[0].arrivalAirport.name,
  };
  return flightData;
};
