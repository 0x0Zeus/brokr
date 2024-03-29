import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchCarsResponse } from '@shared/cars/interfaces/carsResponse';
import { ICarsDestinationResponse } from '@shared/cars/interfaces/destinationsResponse';
import { ICarsSearchParams } from '@shared/cars/interfaces/params';
import { ICar } from '@shared/cars/models/car';
import { ICarsDestination } from '@shared/cars/models/destination';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private destinationURL =
    'https://booking-com15.p.rapidapi.com/api/v1/cars/searchDestination';
  private searchCarsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/cars/searchCarRentals';

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
      .get<ICarsDestinationResponse>(this.destinationURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const transData = resp.data.map((item) => {
              const coordinatesData = {
                ...item.coordinates,
                location: item.name,
              };
              return coordinatesData;
            });
            return transData;
          } else {
            return [];
          }
        })
      );
  }

  getCars(query: ICarsSearchParams): Observable<ICar[]> {
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
        .append('drop_off_time', untilTime),
    };
    return this.http.get<ISearchCarsResponse>(this.searchCarsURL, options).pipe(
      map((resp) => {
        if (resp.data) {
          const transData = resp.data.search_results.map((car) => {
            const carData = {
              id: car.vehicle_id,
              photo: car.vehicle_info.image_thumbnail_url,
              location: car.supplier_info.address,
              model: car.vehicle_info.v_name,
              rating: car.rating_info.average,
              price: Math.ceil(car.pricing_info.price / 2),
            };
            return carData;
          });
          return transData;
        } else {
          return [];
        }
      })
    );
  }
}
