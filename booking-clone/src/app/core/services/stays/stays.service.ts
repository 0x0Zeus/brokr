import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStaysDestinationsResponse } from '@shared/interfaces/stays/destinationsResponse';
import {
  IStayDetailsSearchParams,
  IStaysSearchParams,
} from '@shared/interfaces/stays/params';
import { IReviewsResponse } from '@shared/interfaces/stays/reviewsResponse';
import { IStayDetailsResponse } from '@shared/interfaces/stays/stayDetailsResponse';
import { IStaysResponse } from '@shared/interfaces/stays/staysResponse';
import { IStaysDestinations } from '@shared/models/stays/destination';
import { IStayReview } from '@shared/models/stays/review';
import { IStay } from '@shared/models/stays/stay';
import { IStayDetails } from '@shared/models/stays/stayDetails';
import {
  getTransformedStayData,
  getTransformedStayDetails,
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
  private searchStayDetailsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails';
  private searchStayReviewsURL =
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
      .get<IStayDetailsResponse>(this.searchStayDetailsURL, options)
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

  getStayReviews({ hotelId }: { hotelId: string }): Observable<IStayReview[]> {
    const options = {
      params: new HttpParams().set('hotel_id', hotelId),
    };

    return this.http
      .get<IReviewsResponse>(this.searchStayReviewsURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const stayReviewsData = resp.data.result.map((review) => {
              const transformedReview = {
                photo: '#',
                rating: review.average_score,
                review: review.pros,
                reviewer: review.author.name,
                date: '2022-04-05',
              };

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
