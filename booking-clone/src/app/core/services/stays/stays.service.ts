import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStaysDestinationResponse } from '@shared/interfaces/stays/destinationsResponse';
import {
  IStayDetailsSearchParams,
  IStaysSearchParams,
} from '@shared/interfaces/stays/params';
import { IStayDetailsResponse } from '@shared/interfaces/stays/stayDetailsResponse';
import { IStaysResponse } from '@shared/interfaces/stays/staysResponse';
import { IStaysDestination } from '@shared/models/stays/destination';
import { IStay } from '@shared/models/stays/stay';
import { IStayDetails } from '@shared/models/stays/stayDetails';
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
                latitude: property.latitude,
                longitude: property.longitude,
                checkInDate: property.checkinDate,
                checkOutDate: property.checkoutDate,
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
            const data = resp.data;
            const stayDetailsData = {
              id: data.hotel_id,
              photo: data.rooms[data.block[0].room_id].photos[0].url_max1280,
              location: data.address,
              review: data.review_nr,
              description: data.rooms[data.block[0].room_id].description,
              arrival_date: data.arrival_date,
              departure_date: data.departure_date,
              city: data.city,
              facilities: data.facilities_block.facilities.map(
                (fac) => fac.name
              ),
              nights: Math.floor(
                Number(
                  Date.parse(data.departure_date) -
                    Date.parse(data.arrival_date)
                ) /
                  1000 /
                  60 /
                  60 /
                  24
              ),
              name: data.hotel_name,
              cancellation: {
                type: data.block[0].paymentterms.cancellation.type_translation,
                before:
                  data.block[0].paymentterms.cancellation.info.date_before,
              },
              rating: Number((data.wifi_review_score.rating / 2).toFixed(1)),
              specifications: {
                square: data.block[0].room_surface_in_m2,
                bedrooms: data.block[0].number_of_bedrooms,
                bathrooms: data.block[0].number_of_bathrooms,
              },
            };
            return stayDetailsData;
          } else {
            return null;
          }
        })
      );
  }
}
