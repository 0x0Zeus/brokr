import { IStayDestinationsResponse } from '@shared/interfaces/stays/destinationsResponse';
import { IStayDetailsDataResponse } from '@shared/interfaces/stays/stayDetailsResponse';
import { IStayResponse } from '@shared/interfaces/stays/staysResponse';
import { IStaysDestinations } from '@shared/models/stays/destination';
import { IStay } from '@shared/models/stays/stay';
import { IStayDetails } from '@shared/models/stays/stayDetails';

export const getTransformedStayData = ({
  property,
  accessibilityLabel,
}: IStayResponse): IStay => {
  const imgUrlArr = property.photoUrls[0].split('/');
  const transImgResolution = `${imgUrlArr.slice(0, 6).join('/')}/square330/${imgUrlArr.slice(7).join('/')}`;

  const stayData = {
    id: property.id,
    photo: transImgResolution,
    location: property.wishlistName,
    label: accessibilityLabel,
    name: property.name,
    rating: Number((property.reviewScore / 2).toFixed(1)),
    price: Number(property.priceBreakdown.grossPrice.value.toFixed(2)),
    reviewCount: property.reviewCount,
    latitude: property.latitude,
    longitude: property.longitude,
    checkInDate: property.checkinDate,
    checkOutDate: property.checkoutDate,
  };
  return stayData;
};

export const getTransformedStaysDestination = (
  destination: IStayDestinationsResponse
): IStaysDestinations => {
  const locationData = {
    destId: destination.dest_id,
    searchType: destination.dest_type,
    location: destination.label,
  };
  return locationData;
};

export const getTransformedStayDetails = (
  stay: IStayDetailsDataResponse
): IStayDetails => {
  const stayDetailsData = {
    id: stay.hotel_id,
    photo: stay.rooms[stay.block[0].room_id].photos[0].url_max1280,
    location: stay.address,
    review: stay.review_nr,
    description: stay.rooms[stay.block[0].room_id].description,
    arrival_date: stay.arrival_date,
    departure_date: stay.departure_date,
    city: stay.city,
    facilities: stay.facilities_block.facilities.map((fac) => fac.name),
    nights: Math.floor(
      Number(Date.parse(stay.departure_date) - Date.parse(stay.arrival_date)) /
        1000 /
        60 /
        60 /
        24
    ),
    name: stay.hotel_name,
    cancellation: {
      type: stay.block[0].paymentterms.cancellation.type_translation,
      before: stay.block[0].paymentterms.cancellation.info.date_before,
    },
    rating: Number((stay.wifi_review_score.rating / 2).toFixed(1)),
    specifications: {
      square: stay.block[0].room_surface_in_m2,
      bedrooms: stay.block[0].number_of_bedrooms,
      bathrooms: stay.block[0].number_of_bathrooms,
    },
  };
  return stayDetailsData;
};
