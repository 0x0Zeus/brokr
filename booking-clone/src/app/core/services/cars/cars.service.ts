import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '@shared/enviroments';
import {
  ICarDetailsParams,
  ICarDetailsResponse,
  ICarReviewsResponse,
  ICarsDestinationsResponse,
  ICarsInfoData,
  ICarsSearchParams,
  ISearchCarsResponse,
} from '@shared/interfaces/cars';
import { ICarDetails, ICarReview, ICarsDestination } from '@shared/models/cars';
import {
  getTransformedCarData,
  getTransformedCarDestinations,
  getTransformedCarDetails,
  getTransformedCarReview,
} from '@shared/utils';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private destinationURL = `${baseUrl}/cars/searchDestination`;
  private searchCarsURL = `${baseUrl}/cars/searchCarRentals`;
  private carDetailsURL = `${baseUrl}/cars/vehicleDetails`;
  private carReviewsURL = `${baseUrl}/cars/vehicleSupplierReview`;

  constructor(private http: HttpClient) {}

  getDestinations({
    query,
  }: {
    query: string;
  }): Observable<ICarsDestination[]> {
    const options = {
      params: new HttpParams().set('query', query),
    };
    return this.http
      .get<ICarsDestinationsResponse>(this.destinationURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const transData = resp.data.map((location) => {
              const coordinatesData = getTransformedCarDestinations(location);
              return coordinatesData;
            });
            return transData;
          } else {
            return [];
          }
        })
      );
  }

  getCars(query: ICarsSearchParams): Observable<ICarsInfoData> {
    const { fromDate, fromTime, latitude, longitude, untilDate, untilTime } =
      query;
    const options = {
      params: new HttpParams()
        .set('pick_up_latitude', latitude)
        .append('pick_up_longitude', longitude)
        .append('drop_off_latitude', latitude)
        .append('drop_off_longitude', longitude)
        .append('pick_up_date', fromDate)
        .append('drop_off_date', untilDate)
        .append('pick_up_time', fromTime)
        .append('drop_off_time', untilTime)
        .append('currency_code', 'USD'),
    };
    return this.http.get<ISearchCarsResponse>(this.searchCarsURL, options).pipe(
      map((resp) => {
        if (resp.data.search_results) {
          const transData = resp.data.search_results.map((car) => {
            const carData = getTransformedCarData(car, resp.data.search_key);
            return carData;
          });
          return {
            cars: transData,
            totalCount: resp.data.count,
          };
        } else {
          return {
            cars: [],
            totalCount: 0,
          };
        }
      })
    );
  }

  getCarDetails(query: ICarDetailsParams): Observable<ICarDetails | null> {
    const { searchKey, vehicleId } = query;
    const options = {
      params: new HttpParams()
        .set('search_key', searchKey)
        .append('vehicle_id', vehicleId)
        .append('currency_code', 'USD'),
    };
    return this.http.get<ICarDetailsResponse>(this.carDetailsURL, options).pipe(
      map((resp) => {
        if (resp.data) {
          const stayDetailsData = getTransformedCarDetails(resp);
          return stayDetailsData;
        } else {
          return null;
        }
      })
    );
  }

  getCarReviews(query: ICarDetailsParams): Observable<ICarReview[]> {
    const { searchKey, vehicleId } = query;
    const options = {
      params: new HttpParams()
        .set('search_key', searchKey)
        .append('vehicle_id', vehicleId),
    };

    return this.http.get<ICarReviewsResponse>(this.carReviewsURL, options).pipe(
      map((resp) => {
        if (resp.data.customerReviews.reviews) {
          const carReviewsData = resp.data.customerReviews.reviews.map(
            (review) => {
              const transformedReview = getTransformedCarReview(review);

              return transformedReview;
            }
          );
          return carReviewsData;
        } else {
          return [];
        }
      })
    );
  }
}
