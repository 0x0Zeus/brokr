export interface IStaysSearchParams {
  arrivalDate: string;
  departureDate: string;
  destId: string;
  searchType: string;
  page: number;
}

export interface IStaysSearchFilters {
  adults: number | null;
  rooms: number | null;
  priceMin: number | null;
  priceMax: number | null;
  sortBy: string | null;
}

export interface IStayDetailsSearchParams {
  arrivalDate: string;
  departureDate: string;
  hotelId: string;
}

export interface IStayReviewsParams {
  hotelId: string;
  page: number;
}
