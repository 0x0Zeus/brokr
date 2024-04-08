import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStaysDestinationsResponse } from '@shared/interfaces/stays/destinationsResponse';
import {
  IStayDetailsSearchParams,
  IStayReviewsParams,
  IStaysSearchParams,
} from '@shared/interfaces/stays/params';
import { IStayReviewsResponse } from '@shared/interfaces/stays/reviewsResponse';
import { IStayDetailsResponse } from '@shared/interfaces/stays/stayDetailsResponse';
import { IStaysResponse } from '@shared/interfaces/stays/staysResponse';
import { IStaysDestinations } from '@shared/models/stays/destination';
import { IStayReview } from '@shared/models/stays/review';
import { IStay } from '@shared/models/stays/stay';
import { IStayDetails } from '@shared/models/stays/stayDetails';
import {
  getTransformedStayData,
  getTransformedStayDetails,
  getTransformedStayReview,
  getTransformedStaysDestination,
} from '@shared/utils';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaysService {
  private destinationURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination';
  private searchStaysURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels';
  private stayDetailsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails';
  private stayReviewsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelReviews';

  constructor(private http: HttpClient) {}

  getDestinations({
    query,
  }: {
    query: string;
  }): Observable<IStaysDestinations[]> {
    const options = {
      params: new HttpParams().set('query', query),
    };
    return this.http
      .get<IStaysDestinationsResponse>(this.destinationURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const transData = resp.data.map((location) => {
              const locationData = getTransformedStaysDestination(location);
              return locationData;
            });
            return transData;
          } else {
            return [];
          }
        })
      );
  }

  getStays(query: IStaysSearchParams): Observable<IStay[]> {
    const { destId, searchType, arrivalDate, departureDate, page } = query;
    const options = {
      params: new HttpParams()
        .set('dest_id', destId)
        .append('search_type', searchType)
        .append('arrival_date', arrivalDate)
        .append('departure_date', departureDate)
        .append('page_number', page),
    };
    return this.http.get<IStaysResponse>(this.searchStaysURL, options).pipe(
      map((resp) => {
        if (resp.data) {
          const transData = resp.data.hotels.map((stay) => {
            const stayData = getTransformedStayData(stay);
            return stayData;
          });
          return transData;
        } else {
          return [];
        }
      })
    );
  }

  getStayDetails({
    arrivalDate,
    departureDate,
    hotelId,
  }: IStayDetailsSearchParams): Observable<IStayDetails | null> {
    const options = {
      params: new HttpParams()
        .set('hotel_id', hotelId)
        .append('arrival_date', arrivalDate)
        .append('departure_date', departureDate),
    };

    return this.http
      .get<IStayDetailsResponse>(this.stayDetailsURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const stayDetailsData = getTransformedStayDetails(resp.data);
            return stayDetailsData;
          } else {
            return null;
          }
        })
      );
  }

  getStayReviews({
    hotelId,
    page,
  }: IStayReviewsParams): Observable<IStayReview[]> {
    const options = {
      params: new HttpParams()
        .set('hotel_id', hotelId)
        .append('page_number', page),
    };

    return this.http
      .get<IStayReviewsResponse>(this.stayReviewsURL, options)
      .pipe(
        map((resp) => {
          if (resp.data.result) {
            const stayReviewsData = resp.data.result.map((review) => {
              const transformedReview = getTransformedStayReview(review);

              return transformedReview;
            });
            return stayReviewsData;
          } else {
            return [];
          }
        })
      );
  }
}
