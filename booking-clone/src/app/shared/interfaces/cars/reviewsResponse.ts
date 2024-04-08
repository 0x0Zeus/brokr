export interface ICarReviewsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  supplier: Supplier;
  customerReviews: CustomerReviews;
}

interface Supplier {
  imageUrl: string;
  name: string;
  title: string;
  rating: Rating;
}

interface Rating {
  title: string;
  subtitle: string;
  average: string;
  breakdown: Breakdown[];
}

interface Breakdown {
  score: string;
  title: string;
}

interface CustomerReviews {
  title: string;
  reviews: ICarReviewResponse[];
  sort: Sort;
}

export interface ICarReviewResponse {
  rating: string;
  date: string;
  positive?: string;
  negative?: string;
  type: string;
  epochDay: number;
}

interface Sort {
  ctaTitle: string;
  options: Options;
  pageTitle: string;
}

interface Options {
  items: Item[];
  default: string;
}

interface Item {
  label: string;
  id: string;
}
