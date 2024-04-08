import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAttractionDetailsResponse } from '@shared/interfaces/attractions/attractionDetailsResponse';
import { IAttractionsResponse } from '@shared/interfaces/attractions/attractionsResponse';
import { IAttrDestinationsResponse } from '@shared/interfaces/attractions/destinationsResponse';
import { IAttractionsSearchParams } from '@shared/interfaces/attractions/params';
import { IAttraction } from '@shared/models/attractions/attraction';
import { IAttractionDetails } from '@shared/models/attractions/attractionDetails';
import { IAttractionsDestination } from '@shared/models/attractions/destination';
import {
  getTransformedAttractionData,
  getTransformedAttractionDetails,
  getTransformedAttrDestination,
} from '@shared/utils/transformAttractionsResponse';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttractionsService {
  private destinationURL =
    'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation';
  private searchAttractionsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions';
  private attractionDetailsURL =
    'https://booking-com15.p.rapidapi.com/api/v1/attraction/getAttractionDetails';

  constructor(private http: HttpClient) {}

  getDestinations({
    query,
  }: {
    query: string;
  }): Observable<IAttractionsDestination[]> {
    const options = {
      params: new HttpParams().set('query', query),
    };
    return this.http
      .get<IAttrDestinationsResponse>(this.destinationURL, options)
      .pipe(
        map((resp) => {
          if (resp.data.destinations) {
            const transData = resp.data.destinations.map((location) => {
              const locationData = getTransformedAttrDestination(location);
              return locationData;
            });
            return transData;
          } else {
            return [];
          }
        })
      );
  }

  getAttractions(query: IAttractionsSearchParams): Observable<IAttraction[]> {
    const { attractionId, page } = query;
    const options = {
      params: new HttpParams()
        .set('id', attractionId)
        .append('page', page)
        .append('currency_code', 'USD'),
    };
    return this.http
      .get<IAttractionsResponse>(this.searchAttractionsURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const transData = resp.data.products.map((attraction) => {
              const attractionData = getTransformedAttractionData(attraction);
              return attractionData;
            });
            return transData;
          } else {
            return [];
          }
        })
      );
  }

  getAttractionDetails({
    attractionId,
  }: {
    attractionId: string;
  }): Observable<IAttractionDetails | null> {
    const options = {
      params: new HttpParams()
        .set('slug', attractionId)
        .append('currency_code', 'USD'),
    };

    return this.http
      .get<IAttractionDetailsResponse>(this.attractionDetailsURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const stayDetailsData = getTransformedAttractionDetails(resp.data);
            return stayDetailsData;
          } else {
            return null;
          }
        })
      );
  }
}
