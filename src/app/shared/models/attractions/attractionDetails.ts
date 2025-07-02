import { IPhoto } from '../shared';

export interface IAttractionDetails {
  id: string;
  photos: IPhoto[];
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

export interface IAttractionReview {
  photo: string | null;
  rating: number;
  review: string;
  reviewer: string;
  date: string;
}
