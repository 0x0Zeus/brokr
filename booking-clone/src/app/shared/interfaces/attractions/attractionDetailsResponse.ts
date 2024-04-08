export interface IAttractionDetailsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: IAttractionDataDetailsResponse;
}

export interface IAttractionDataDetailsResponse {
  __typename: string;
  additionalInfo: string;
  addresses: Addresses;
  applicableTerms: ApplicableTerm[];
  cancellationPolicy: CancellationPolicy;
  description: string;
  flags: Flag[];
  guideSupportedLanguages: string[];
  healthSafety: string[];
  id: string;
  isBookable: boolean;
  labels: Label[];
  name: string;
  notIncluded: string[];
  offers: Offer[];
  onSiteRequirements: OnSiteRequirements;
  operatedBy: string;
  photos: Photo[];
  primaryPhoto: PrimaryPhoto;
  representativePrice: RepresentativePrice;
  reviews: Reviews;
  reviewsStats: ReviewsStats;
  shortDescription: string;
  slug: string;
  supportedFeatures: SupportedFeatures;
  ufiDetails: UfiDetails;
  whatsIncluded: string[];
}

interface Addresses {
  __typename: string;
  arrival: Location[] | null;
  departure: Location[] | null;
  meeting: Location[] | null;
}

interface Location {
  __typename: string;
  address: string;
  city: string;
  country: string;
  id: string;
  latitude: string;
  longitude: string;
  locationType: string;
}

interface ApplicableTerm {
  __typename: string;
  policyProvider: string;
  privacyPolicyUrl: string;
  termsUrl: string;
}

interface CancellationPolicy {
  __typename: string;
  hasFreeCancellation: boolean;
}

interface Flag {
  __typename: string;
  flag: string;
  value: boolean;
  rank: number;
}

interface Label {
  __typename: string;
  text: string;
  type: string;
}

interface Offer {
  __typename: string;
  availabilityType: string;
  id: string;
}

interface OnSiteRequirements {
  __typename: string;
}

interface Photo {
  __typename: string;
  small: string;
  medium: string;
  isPrimary: boolean;
}

interface PrimaryPhoto {
  __typename: string;
  small: string;
}

interface RepresentativePrice {
  __typename: string;
  chargeAmount: number;
  currency: string;
  publicAmount: number;
}

interface Reviews {
  __typename: string;
  total: number;
  reviews: Review[];
}

interface Review {
  __typename: string;
  id: string;
  rating?: boolean;
  content?: string;
  epochMs: number;
  language?: string;
  numericRating: number;
  user?: User;
}

interface User {
  __typename: string;
  name: string;
  cc1: string;
  avatar?: string;
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

interface SupportedFeatures {
  __typename: string;
  nativeApp: boolean;
  nativeAppBookProcess: boolean;
  liveAvailabilityCheckSupported: boolean;
}

interface UfiDetails {
  __typename: string;
  ufi: number;
  bCityName: string;
  url: Url;
}

interface Url {
  __typename: string;
  country: string;
}
