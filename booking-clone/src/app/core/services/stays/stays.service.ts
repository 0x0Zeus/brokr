import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStaysDestinationResponse } from '@shared/stays/interfaces/destinationsResponse';
import { IStaysResponse } from '@shared/stays/interfaces/staysResponse';
import { IStaysDestination } from '@shared/stays/models/destination';
import { IStaysSearchParams } from '@shared/stays/models/params';
import { IStay } from '@shared/stays/models/stay';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaysService {
  private destinationURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination';
  private searchStaysURL =
    'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels';

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
      .get<IStaysDestinationResponse>(this.destinationURL, options)
      .pipe(
        map((resp) => {
          if (resp.data) {
            const transData = resp.data.map((item) => {
              const locationData = {
                destId: item.dest_id,
                searchType: item.dest_type,
                location: item.label,
              };
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
    const { destId, searchType, arrivalDate, departureDate } = query;
    const options = {
      params: new HttpParams()
        .set('dest_id', destId)
        .append('search_type', searchType)
        .append('arrival_date', arrivalDate)
        .append('departure_date', departureDate),
    };
    return this.http.get<IStaysResponse>(this.searchStaysURL, options).pipe(
      map((resp) => {
        if (resp.data) {
          const transData = resp.data.hotels.map(
            ({ property, accessibilityLabel }) => {
              const imgUrlArr = property.photoUrls[0].split('/');
              const transImgResolution = `${imgUrlArr.slice(0, 6).join('/')}/square330/${imgUrlArr.slice(7).join('/')}`;
              const stayData = {
                id: property.id,
                photo: transImgResolution,
                location: property.wishlistName,
                label: accessibilityLabel,
                name: property.name,
                rating: Number((property.reviewScore / 2).toFixed(1)),
                price: Number(
                  property.priceBreakdown.grossPrice.value.toFixed(2)
                ),
                reviewCount: property.reviewCount,
              };
              return stayData;
            }
          );
          return transData;
        } else {
          return [];
        }
      })
    );
  }
}
