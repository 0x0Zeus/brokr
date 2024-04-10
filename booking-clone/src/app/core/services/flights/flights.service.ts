import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IFlightsDestinationsResponse,
  IFlightsResponse,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import { IFlight, IFlightsDestination } from '@shared/models/flights';
import {
  getTransformedFlightData,
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
  // private stayDetailsURL =
  //   'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails';
  // private stayReviewsURL =
  //   'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelReviews';

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
    const { fromId, toId, returnDate, departureDate, page } = query;
    const options = {
      params: new HttpParams()
        .set('fromId', fromId)
        .append('toId', toId)
        .append('departDate', departureDate)
        .append('returnDate', returnDate)
        .append('pageNo', page)
        .append('currency_code', 'USD'),
    };
    return this.http.get<IFlightsResponse>(this.searchFlightsURL, options).pipe(
      map((resp) => {
        if (resp.data) {
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

  // getStayDetails({
  //   arrivalDate,
  //   departureDate,
  //   hotelId,
  // }: IStayDetailsSearchParams): Observable<IStayDetails | null> {
  //   const options = {
  //     params: new HttpParams()
  //       .set('hotel_id', hotelId)
  //       .append('arrival_date', arrivalDate)
  //       .append('departure_date', departureDate)
  //       .append('currency_code', 'USD'),
  //   };

  //   return this.http
  //     .get<IStayDetailsResponse>(this.stayDetailsURL, options)
  //     .pipe(
  //       map((resp) => {
  //         if (resp.data) {
  //           const stayDetailsData = getTransformedStayDetails(resp.data);
  //           return stayDetailsData;
  //         } else {
  //           return null;
  //         }
  //       })
  //     );
  // }

  // getStayReviews({
  //   hotelId,
  //   page,
  // }: IStayReviewsParams): Observable<IStayReview[]> {
  //   const options = {
  //     params: new HttpParams()
  //       .set('hotel_id', hotelId)
  //       .append('page_number', page),
  //   };

  //   return this.http
  //     .get<IStayReviewsResponse>(this.stayReviewsURL, options)
  //     .pipe(
  //       map((resp) => {
  //         if (resp.data.result) {
  //           const stayReviewsData = resp.data.result.map((review) => {
  //             const transformedReview = getTransformedStayReview(review);

  //             return transformedReview;
  //           });
  //           return stayReviewsData;
  //         } else {
  //           return [];
  //         }
  //       })
  //     );
  // }
}
