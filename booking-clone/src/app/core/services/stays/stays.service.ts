import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '@shared/enviroments';
import {
  IStayDetailsResponse,
  IStayDetailsSearchParams,
  IStayReviewsParams,
  IStayReviewsResponse,
  IStaysDestinationsResponse,
  IStaysInfoData,
  IStaysResponse,
  IStaysSearchFilters,
  IStaysSearchParams,
} from '@shared/interfaces/stays';
import { IReview } from '@shared/models/shared';
import { IStayDetails, IStaysDestination } from '@shared/models/stays';
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
  private destinationURL = `${baseUrl}/hotels/searchDestination`;
  private searchStaysURL = `${baseUrl}/hotels/searchHotels`;
  private stayDetailsURL = `${baseUrl}/hotels/getHotelDetails`;
  private stayReviewsURL = `${baseUrl}/hotels/getHotelReviews`;

  constructor(private http: HttpClient) {}

  getDestinations({
    query,
  }: {
    query: string;
  }): Observable<IStaysDestination[]> {
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

  getStays(
    query: IStaysSearchParams,
    filters: IStaysSearchFilters
  ): Observable<IStaysInfoData> {
    const { destId, searchType, arrivalDate, departureDate, page } = query;

    let params: HttpParams = new HttpParams()
      .set('dest_id', destId)
      .append('search_type', searchType)
      .append('arrival_date', arrivalDate)
      .append('departure_date', departureDate)
      .append('page_number', page)
      .append('currency_code', 'USD');

    if (filters.adults) {
      params = params.append('adults', filters.adults);
    }
    if (filters.rooms) {
      params = params.append('room_qty', filters.rooms);
    }
    if (filters.priceMin) {
      params = params.append('price_min', filters.priceMin);
    }
    if (filters.priceMax) {
      params = params.append('price_max', filters.priceMax);
    }
    if (filters.sortBy) {
      params = params.append('sort_by', filters.sortBy);
    }

    return this.http.get<IStaysResponse>(this.searchStaysURL, { params }).pipe(
      map((resp) => {
        if (resp.data) {
          const transData = resp.data.hotels.map((stay) => {
            const stayData = getTransformedStayData(stay);
            return stayData;
          });

          return {
            stays: transData,
            totalCount:
              page === 1 && resp.data.hotels[0]
                ? Number(resp.data.meta[0].title.split(' ')[0])
                : 0,
          };
        } else {
          return {
            stays: [],
            totalCount: 0,
          };
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
        .append('departure_date', departureDate)
        .append('currency_code', 'USD'),
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

  getStayReviews({ hotelId, page }: IStayReviewsParams): Observable<IReview[]> {
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
