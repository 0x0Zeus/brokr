export interface IAttraction {
  id: string;
  photo: string;
  location: string;
  label: string;
  name: string;
  currency: string;
  rating: number | null;
  price: number;
  reviewCount: number | null;
  slug: string;
}
