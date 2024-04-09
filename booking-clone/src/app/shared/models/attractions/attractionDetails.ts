export interface IAttractionDetails {
  id: string;
  photos: IPhotos[];
  location: string;
  price: number;
  currency: string;
  reviewsCount: number;
  description: string;
  cancellation: string;
  city: string;
  includes: string[];
  name: string;
  rating: number;
  reviews: IAttractionReview[];
  accessibility: string[];
}

interface IPhotos {
  lg: string;
  sm: string;
}

export interface IAttractionReview {
  photo: string | null;
  rating: number;
  review: string;
  reviewer: string;
  date: string;
}
