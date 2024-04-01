export interface ISearchCarsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    type: string;
    provider: string;
    count: number;
    is_genius_location: boolean;
    search_results: ISearchCarsResponseItem[];
    search_key: string;
    meta: {
      response_code: number;
    };
    title: string;
  };
}

interface ISearchCarsResponseItem {
  vehicle_id: string;
  accessibility: {
    pick_up_location: string;
    transmission: string;
    supplier_rating: string;
    fuel_policy: string;
  };
  pricing_info: {
    quote_allowed: number;
    deposit: number;
    base_currency: string;
    discount: number;
    currency: string;
    base_price: number;
    pay_when: string;
    price: number;
    base_deposit: number;
  };
  rating_info: {
    pickup_time: number;
    value_for_money: number;
    cleanliness: number;
    average: number;
    location: number;
    average_text: string;
    efficiency: number;
    no_of_ratings: number;
    dropoff_time: number;
    condition: number;
  };
  vehicle_info: {
    fuel_policy: string;
    image_thumbnail_url: string;
    v_name: string;
    unlimited_mileage: 0;
    badges: {
      greenVehicle: string;
    };
    mileage: string;
    suitcases: {
      small: string;
      big: string;
    };
    transmission: string;
    seats: string;
    image_url: string;
  };
  supplier_info: {
    name: string;
    pickup_instructions: string;
    may_require_credit_card_guarantee: boolean;
    address: string;
    longitude: string;
    latitude: string;
    dropoff_instructions: string;
    location_type: string;
    logo_url: string;
  };
  route_info: {
    pickup: {
      location_type: string;
      icon: string;
      location_id: string;
      city: string;
      country_code: string;
      latitude: string;
      address: string;
      country: string;
      longitude: string;
      name: string;
    };
    dropoff: {
      latitude: string;
      address: string;
      country: string;
      longitude: string;
      name: string;
      location_type: string;
      icon: string;
      city: string;
      location_id: string;
      country_code: string;
    };
  };
  fee_info: {
    fee: number;
    type: string;
    currency: string;
    tax: number;
  };
  content: {
    badges: [
      {
        variation: string;
        type: string;
        text: string;
      },
    ];
    supplier: {
      rating: {
        localisedRating: {
          rawValue: number;
          displayValue: string;
        };
        average: string;
        subtitle: string;
        title: string;
      };
      imageUrl: string;
      name: string;
    };
  };
}
