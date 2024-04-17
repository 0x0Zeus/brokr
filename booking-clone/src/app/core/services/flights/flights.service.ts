import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '@shared/enviroments';
import {
  IFlightDetailsResponse,
  IFlightsDestinationsResponse,
  IFlightsInfoData,
  IFlightsResponse,
  IFlightsSearchFilters,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import { IFlightDetails, IFlightsDestination } from '@shared/models/flights';
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
  private destinationURL = `${baseUrl}/flights/searchDestination`;
  private searchFlightsURL = `${baseUrl}/flights/searchFlights`;
  private flightDetailsURL = `${baseUrl}/flights/getFlightDetails`;

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

  getFlights(
    query: IFlightsSearchParams,
    filters: IFlightsSearchFilters
  ): Observable<IFlightsInfoData> {
    const { fromId, toId, departureDate, page } = query;
    let params = new HttpParams()
      .set('fromId', fromId)
      .append('toId', toId)
      .append('departDate', departureDate)
      .append('pageNo', page)
      .append('currency_code', 'USD');

    if (filters.adults) {
      params = params.append('adults', filters.adults);
    }
    if (filters.cabinClass) {
      params = params.append('cabinClass', filters.cabinClass);
    }
    if (filters.sortBy) {
      params = params.append('sort', filters.sortBy);
    }

    return this.http
      .get<IFlightsResponse>(this.searchFlightsURL, { params })
      .pipe(
        map((resp) => {
          if (resp.data.flightOffers) {
            const transData = resp.data.flightOffers.map((flight) => {
              const flightData = getTransformedFlightData(flight);
              return flightData;
            });

            return {
              flights: transData,
              totalCount: resp.data.aggregation.filteredTotalCount,
            };
          } else {
            return {
              flights: [],
              totalCount: 0,
            };
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
