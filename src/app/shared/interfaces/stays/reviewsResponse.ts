export interface IStayReviewsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  count: number;
  result: IStayReviewResponse[];
  sort_options: SortOption[];
}

export interface IStayReviewResponse {
  reviewng: number;
  cons: string;
  title_translated: string;
  review_id: number;
  countrycode: string;
  hotelier_response_date?: number;
  pros_translated: string;
  review_hash: string;
  author: Author;
  date: string;
  pros: string;
  travel_purpose: string;
  is_moderated: number;
  helpful_vote_count: number;
  reviewer_photos: ReviewerPhoto[];
  no_user_title: number;
  languagecode: string;
  hotel_id: number;
  average_score: number;
  title: string;
  hotelier_response: string;
  is_incentivised: number;
  cons_translated: string;
  stayed_room_info: StayedRoomInfo;
  anonymous: string;
}

interface Author {
  countrycode: string;
  city: string;
  user_id: number;
  nr_reviews: number;
  type: string;
  helpful_vote_count: number;
  type_string: string;
  avatar?: string;
  name: string;
}

interface ReviewerPhoto {
  '90_90': string;
  '60_60': string;
  '500_500': string;
  '1280_900': string;
}

interface StayedRoomInfo {
  room_id: number;
  num_nights: number;
  room_name: string;
  photo?: Photo;
  checkin: string;
  checkout: string;
}

interface Photo {
  url_640x200: string;
  photo_id: number;
  ratio: number;
  url_max300: string;
  url_square60: string;
  url_original: string;
}

interface SortOption {
  sort_option_default: number;
  title: string;
  sort_option_id: string;
}
