export interface IAttractionsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  __typename: string;
  products: IAttractionResponse[];
  filterStats: FilterStats;
  sorters: Sorter[];
  defaultSorter: DefaultSorter;
  filterOptions: FilterOptions;
}

export interface IAttractionResponse {
  __typename: string;
  cancellationPolicy: CancellationPolicy;
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  representativePrice: RepresentativePrice;
  primaryPhoto: PrimaryPhoto;
  reviewsStats?: ReviewsStats;
  ufiDetails: UfiDetails;
  offers: Offer[];
  supportedFeatures: SupportedFeatures;
  flags?: Flag[];
}

interface CancellationPolicy {
  __typename: string;
  hasFreeCancellation: boolean;
}

interface RepresentativePrice {
  __typename: string;
  chargeAmount: number;
  currency: string;
  publicAmount: number;
}

interface PrimaryPhoto {
  __typename: string;
  small: string;
}

interface ReviewsStats {
  __typename: string;
  allReviewsCount: number;
  percentage: string;
  combinedNumericStats: CombinedNumericStats;
}

interface CombinedNumericStats {
  __typename: string;
  average: number;
  total: number;
}

interface UfiDetails {
  __typename: string;
  bCityName: string;
  ufi: number;
  url: Url;
}

interface Url {
  __typename: string;
  country: string;
}

interface Offer {
  __typename: string;
  items: Item[];
}

interface Item {
  __typename: string;
  id: string;
}

interface SupportedFeatures {
  __typename: string;
  nativeApp: boolean;
}

interface Flag {
  __typename: string;
  flag: string;
  value: boolean;
  rank: number;
}

interface FilterStats {
  __typename: string;
  unfilteredProductCount: number;
  filteredProductCount: number;
}

interface Sorter {
  __typename: string;
  name: string;
  value: string;
}

interface DefaultSorter {
  __typename: string;
  name: string;
  value: string;
}

interface FilterOptions {
  __typename: string;
  typeFilters: TypeFilter[];
  labelFilters: LabelFilter[];
  ufiFilters: UfiFilter[];
  priceFilters: PriceFilter[];
}

interface TypeFilter {
  __typename: string;
  name: string;
  tagname: string;
  productCount: number;
}

interface LabelFilter {
  __typename: string;
  name: string;
  tagname: string;
  productCount: number;
}

interface UfiFilter {
  __typename: string;
  name: string;
  tagname: string;
  productCount: number;
}

interface PriceFilter {
  __typename: string;
  name: string;
  tagname: string;
  productCount: number;
}
