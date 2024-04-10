import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IFlightDetailsResponse,
  IFlightsDestinationsResponse,
  IFlightsResponse,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import {
  IFlight,
  IFlightDetails,
  IFlightsDestination,
} from '@shared/models/flights';
import {
  getTransformedFlightData,
  getTransformedFlightDetails,
  getTransformedFlightsDestination,
} from '@shared/utils';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private destinationURL =
    'https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination';
  private searchFlightsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights';
  private flightDetailsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/flights/getFlightDetails';

  constructor(private http: HttpClient) {}

  getDestinations({
    query,
  }: {
    query: string;
  }): Observable<IFlightsDestination[]> {
    const options = {
      params: new HttpParams().set('query', query),
    };
    return this.http
      .get<IFlightsDestinationsResponse>(this.destinationURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const transData = resp.data.map((location) => {
              const locationData = getTransformedFlightsDestination(location);
              return locationData;
            });
            return transData;
          } else {
            return [];
          }
        })
      );
  }

  getFlights(query: IFlightsSearchParams): Observable<IFlight[]> {
    const { fromId, toId, departureDate, page } = query;
    const options = {
      params: new HttpParams()
        .set('fromId', fromId)
        .append('toId', toId)
        .append('departDate', departureDate)
        .append('pageNo', page)
        .append('currency_code', 'USD'),
    };
    return this.http.get<IFlightsResponse>(this.searchFlightsURL, options).pipe(
      map((resp) => {
        if (resp.data.flightOffers) {
          const transData = resp.data.flightOffers.map((flight) => {
            const flightData = getTransformedFlightData(flight);
            return flightData;
          });
          return transData;
        } else {
          return [];
        }
      })
    );
  }

  getFlightDetails({
    flightId,
  }: {
    flightId: string;
  }): Observable<IFlightDetails | null> {
    const options = {
      params: new HttpParams()
        .append('token', flightId)
        .append('currency_code', 'USD'),
    };

    return this.http
      .get<IFlightDetailsResponse>(this.flightDetailsURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const flightDetailsData = getTransformedFlightDetails(resp.data);
            return flightDetailsData;
          } else {
            return null;
          }
        })
      );
  }
}
