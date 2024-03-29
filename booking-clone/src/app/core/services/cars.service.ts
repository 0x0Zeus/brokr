import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarsDestinationResponse } from '@shared/cars/interfaces/destinationsResponse';
import { ICarsDestination } from '@shared/cars/models/destination';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private destinationURL =
    'https://booking-com15.p.rapidapi.com/api/v1/cars/searchDestination';
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

  getCars({ query }: { query: string }): Observable<ICarsDestination[]> {
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
}
