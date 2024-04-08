export interface ICarDetailsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  meta: Meta;
  content: Content;
  links: Links;
  importantInfo: ImportantInfo;
  vehicle: Vehicle;
  supplier: Supplier3;
  packages: Package[];
  depots: Depots;
  extras: Extra[];
  whatsIncluded: WhatsIncluded;
}

interface Meta {
  response_code: number;
}

interface Content {
  reviews: Reviews | null;
  carCard: CarCard;
}

interface Reviews {
  supplier: Supplier;
  title: string;
}

interface Supplier {
  name: string;
  imageUrl: string;
  rating: Rating;
}

interface Rating {
  title: string;
  average: string;
  subtitle: string;
}

interface CarCard {
  accessibility: Accessibility;
  supplier: Supplier2;
  badges: Badge[];
}

interface Accessibility {
  transmission: string;
  supplier_rating: string;
  pick_up_location: string;
  fuel_policy: string;
}

interface Supplier2 {
  rating: Rating2;
  imageUrl: string;
  name: string;
}

interface Rating2 {
  subtitle: string;
  title: string;
  average: string;
}

interface Badge {
  text: string;
  type: string;
  variation: string;
}

interface Links {
  fullRentalTerms: FullRentalTerms;
}

interface FullRentalTerms {
  label: string;
  url: string;
}

interface ImportantInfo {
  cta: Cta;
  items: Item[];
  subtitle: string;
  title: string;
}

interface Cta {
  text: string;
  title: string;
  url: string;
}

interface Item {
  icon: string;
  text: string;
}

interface Vehicle {
  rentalDurationInDays: number;
  label: string;
  makeAndModel: string;
  specification: Specification;
  carClass: string;
  price: Price;
  fees: Fees;
  imageUrl: string;
  badges: Badges;
  id: string;
  freeCancellation: boolean;
}

interface Specification {
  fuelPolicy: string;
  mileage: string;
  transmission: string;
  numberOfDoors: string;
  smallSuitcases: number;
  bigSuitcases: number;
  numberOfSeats: string;
  airConditioning: boolean;
}

interface Price {
  driveAway: DriveAway;
  display: Display;
  payWhen: string;
  driveAwayPriceIsApprox: boolean;
  base: Base;
}

interface DriveAway {
  value: number;
  currency: string;
}

interface Display {
  currency: string;
  value: number;
}

interface Base {
  currency: string;
  value: number;
}

interface Fees {
  otherFees: OtherFee[];
}

interface OtherFee {
  includedInPrice: boolean;
  alwaysPayable: boolean;
  name: string;
  distanceUnit: string;
  price: Price2;
  unlimited: boolean;
  displayPrice: DisplayPrice;
  type?: string;
}

interface Price2 {
  currency: string;
  minimumAmount?: number;
  taxIncluded: boolean;
  maximumAmount?: number;
  amount: number;
}

interface DisplayPrice {
  currency: string;
  taxIncluded: boolean;
  minimumAmount?: number;
  maximumAmount?: number;
  amount: number;
}

interface Badges {}

interface Supplier3 {
  imageUrl: string;
  rating: number | null;
  locationType: string;
}

interface Package {
  id: string;
  content: Content2;
}

interface Content2 {
  title: string;
  cta: Cta2;
  subtitle: string;
  description: string;
  included: string;
  price: Price3;
}

interface Cta2 {
  attach: string;
  remove: string;
}

interface Price3 {
  displayPrice: string;
  label: string;
  priceAnnotation: PriceAnnotation;
}

interface PriceAnnotation {
  text: string;
}

interface Depots {
  pickup: Pickup;
  dropoff: Dropoff;
}

interface Pickup {
  city: string;
  id: string;
  location_id: string;
  iataCode: string;
  address: string;
  country: string;
  latitude: string;
  country_code: string;
  longitude: string;
  name: string;
  location_type: string;
}

interface Dropoff {
  city: string;
  id: string;
  iataCode: string;
  location_id: string;
  address: string;
  country: string;
  country_code: string;
  latitude: string;
  longitude: string;
  name: string;
  location_type: string;
}

interface Extra {
  maxQuantityAvailable: number;
  id: string;
  type: string;
  name: string;
  detail?: string;
  price: Price4;
}

interface Price4 {
  perRental: PerRental;
  prePayable: boolean;
}

interface PerRental {
  display: Display2;
  base: Base2;
}

interface Display2 {
  value: number;
  currency: string;
}

interface Base2 {
  value: number;
  currency: string;
}

interface WhatsIncluded {
  title: string;
  items: Item2[];
}

interface Item2 {
  icon: string;
  text: string;
}
