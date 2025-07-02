import {
  IFlightDetailsDataResponse,
  IFlightOfferResponse,
  IFlightsDestinationResponse,
} from '@shared/interfaces/flights';
import {
  IFlight,
  IFlightDetails,
  IFlightsDestination,
} from '@shared/models/flights';

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

export const getTransformedFlightDetails = (
  flight: IFlightDetailsDataResponse
): IFlightDetails => {
  const flightData = {
    id: flight.token,
    price: flight.priceBreakdown.total.units,
    bookingMethods: flight.bookerDataRequirement,
    carrierName: flight.segments[0].legs[0].carriersData[0].name,
    carrierLogo: flight.segments[0].legs[0].carriersData[0].logo,
    currency: flight.priceBreakdown.total.currencyCode,
    luggage: flight.segments[0].travellerCabinLuggage[0]?.luggageAllowance
      ? [
          {
            name: 'Type',
            value:
              flight.segments[0].travellerCabinLuggage[0].luggageAllowance
                .luggageType,
          },
          {
            name: 'Max Amount',
            value:
              flight.segments[0].travellerCabinLuggage[0].luggageAllowance
                .maxPiece,
          },
          {
            name: 'Weight',
            value: flight.segments[0].travellerCabinLuggage[0].luggageAllowance
              .maxWeightPerPiece
              ? `${flight.segments[0].travellerCabinLuggage[0].luggageAllowance.maxWeightPerPiece} ${flight.segments[0].travellerCabinLuggage[0].luggageAllowance.massUnit}`
              : 'Unknown',
          },
          {
            name: 'Dimensions',
            value: flight.segments[0].travellerCabinLuggage[0].luggageAllowance
              .sizeRestrictions
              ? `${flight.segments[0].travellerCabinLuggage[0].luggageAllowance.sizeRestrictions.maxLength} * ${flight.segments[0].travellerCabinLuggage[0].luggageAllowance.sizeRestrictions.maxWidth} * ${flight.segments[0].travellerCabinLuggage[0].luggageAllowance.sizeRestrictions.maxHeight} ${flight.segments[0].travellerCabinLuggage[0].luggageAllowance.sizeRestrictions.sizeUnit}`
              : 'Unknown',
          },
        ]
      : null,
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
    benefits: flight.ancillaries?.travelInsurance?.content?.benefits ?? null,
  };
  return flightData;
};
