export interface IFlightsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  aggregation: Aggregation;
  flightOffers: IFlightOfferResponse[];
  flightDeals: FlightDeal[];
  atolProtectedStatus: string;
  isOffersCabinClassExtended: boolean;
  baggagePolicies: BaggagePolicy[];
}

interface Aggregation {
  totalCount: number;
  filteredTotalCount: number;
  stops: Stop[];
  airlines: Airline[];
  departureIntervals: DepartureInterval[];
  flightTimes: FlightTime[];
  durationMin: number;
  durationMax: number;
  minPrice: MinPrice3;
  minPriceFiltered: MinPriceFiltered;
  baggage: Baggage[];
  budget: Budget;
  budgetPerAdult: BudgetPerAdult;
  duration: Duration[];
}

interface Stop {
  numberOfStops: number;
  count: number;
  minPrice: MinPrice;
}

interface MinPrice {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Airline {
  name: string;
  logoUrl: string;
  iataCode: string;
  count: number;
  minPrice: MinPrice2;
}

interface MinPrice2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface DepartureInterval {
  start: string;
  end: string;
}

interface FlightTime {
  arrival: Arrival[];
  departure: Departure[];
}

interface Arrival {
  start: string;
  end: string;
  count: number;
}

interface Departure {
  start: string;
  end: string;
  count: number;
}

interface MinPrice3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MinPriceFiltered {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Baggage {
  paramName: string;
  count: number;
  enabled: boolean;
  baggageType: string;
}

interface Budget {
  paramName: string;
  min: Min;
  max: Max;
}

interface Min {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Max {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BudgetPerAdult {
  paramName: string;
  min: Min2;
  max: Max2;
}

interface Min2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Max2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Duration {
  min: number;
  max: number;
  durationType: string;
  enabled: boolean;
  paramName: string;
}

export interface IFlightOfferResponse {
  token: string;
  segments: Segment[];
  priceBreakdown: PriceBreakdown;
  travellerPrices: TravellerPrice[];
  pointOfSale: string;
  tripType: string;
  posMismatch: PosMismatch;
  includedProducts: IncludedProducts;
  extraProducts: ExtraProduct[];
  offerExtras: OfferExtras;
  ancillaries: Ancillaries;
  offerKeyToHighlight: string;
  seatAvailability?: SeatAvailability;
  extraProductDisplayRequirements: ExtraProductDisplayRequirements;
  brandedFareInfo?: BrandedFareInfo;
}

interface Segment {
  departureAirport: DepartureAirport;
  arrivalAirport: ArrivalAirport;
  departureTime: string;
  arrivalTime: string;
  legs: Leg[];
  totalTime: number;
  travellerCheckedLuggage: TravellerCheckedLuggage[];
  travellerCabinLuggage: TravellerCabinLuggage[];
  isAtolProtected: boolean;
  showWarningDestinationAirport: boolean;
  showWarningOriginAirport: boolean;
}

interface DepartureAirport {
  type: string;
  code: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
  name: string;
}

interface ArrivalAirport {
  type: string;
  code: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
  name: string;
}

interface Leg {
  departureTime: string;
  arrivalTime: string;
  departureAirport: DepartureAirport2;
  arrivalAirport: ArrivalAirport2;
  cabinClass: string;
  flightInfo: FlightInfo;
  carriers: string[];
  carriersData: CarriersDaum[];
  totalTime: number;
  departureTerminal?: string;
  arrivalTerminal?: string;
}

interface DepartureAirport2 {
  type: string;
  code: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
  name: string;
}

interface ArrivalAirport2 {
  type: string;
  code: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
  name: string;
}

interface FlightInfo {
  flightNumber: number;
  planeType: string;
  carrierInfo: CarrierInfo;
}

interface CarrierInfo {
  operatingCarrier: string;
  marketingCarrier: string;
  operatingCarrierDisclosureText: string;
}

interface CarriersDaum {
  name: string;
  code: string;
  logo: string;
}

interface TravellerCheckedLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance;
}

interface LuggageAllowance {
  luggageType: string;
  ruleType: string;
  maxPiece: number;
  maxWeightPerPiece?: number;
  massUnit: string;
  maxTotalWeight?: number;
}

interface TravellerCabinLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance2;
  personalItem?: boolean;
}

interface LuggageAllowance2 {
  luggageType: string;
  maxPiece: number;
  maxWeightPerPiece: number;
  massUnit: string;
  sizeRestrictions: SizeRestrictions;
}

interface SizeRestrictions {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

interface PriceBreakdown {
  total: Total;
  baseFare: BaseFare;
  fee: Fee;
  tax: Tax;
  totalRounded: TotalRounded;
  moreTaxesAndFees: MoreTaxesAndFees;
  discount: Discount;
  totalWithoutDiscount: TotalWithoutDiscount;
  totalWithoutDiscountRounded: TotalWithoutDiscountRounded;
  carrierTaxBreakdown: CarrierTaxBreakdown[];
}

interface Total {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalRounded {
  currencyCode: string;
  nanos: number;
  units: number;
}

interface MoreTaxesAndFees {}

interface Discount {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscountRounded {
  currencyCode: string;
  nanos: number;
  units: number;
}

interface CarrierTaxBreakdown {
  carrier: Carrier;
  avgPerAdult: AvgPerAdult;
  avgPerChild: AvgPerChild;
  avgPerInfant?: AvgPerInfant;
}

interface Carrier {
  name: string;
  code: string;
  logo: string;
}

interface AvgPerAdult {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface AvgPerChild {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface AvgPerInfant {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TravellerPrice {
  travellerPriceBreakdown: TravellerPriceBreakdown;
  travellerReference: string;
  travellerType: string;
}

interface TravellerPriceBreakdown {
  total: Total2;
  baseFare: BaseFare2;
  fee: Fee2;
  tax: Tax2;
  totalRounded: TotalRounded2;
  moreTaxesAndFees: MoreTaxesAndFees2;
  discount: Discount2;
  totalWithoutDiscount: TotalWithoutDiscount2;
  totalWithoutDiscountRounded: TotalWithoutDiscountRounded2;
}

interface Total2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalRounded2 {
  currencyCode: string;
  nanos: number;
  units: number;
}

interface MoreTaxesAndFees2 {}

interface Discount2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscountRounded2 {
  currencyCode: string;
  nanos: number;
  units: number;
}

interface PosMismatch {
  detectedPointOfSale: string;
  isPOSMismatch: boolean;
  offerSalesCountry: string;
}

interface IncludedProducts {
  areAllSegmentsIdentical: boolean;
  segments: Segment2[][];
}

interface Segment2 {
  luggageType: string;
  maxPiece: number;
  maxWeightPerPiece?: number;
  massUnit?: string;
  sizeRestrictions?: SizeRestrictions2;
  ruleType?: string;
  maxTotalWeight?: number;
}

interface SizeRestrictions2 {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

interface ExtraProduct {
  type: string;
  priceBreakdown: PriceBreakdown2;
}

interface PriceBreakdown2 {
  total: Total3;
  baseFare: BaseFare3;
  fee: Fee3;
  tax: Tax3;
  moreTaxesAndFees: MoreTaxesAndFees3;
  discount: Discount3;
  totalWithoutDiscount: TotalWithoutDiscount3;
}

interface Total3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MoreTaxesAndFees3 {}

interface Discount3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface OfferExtras {
  flexibleTicket?: FlexibleTicket;
}

interface FlexibleTicket {
  airProductReference: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown3;
}

interface PriceBreakdown3 {
  total: Total4;
  baseFare: BaseFare4;
  fee: Fee4;
  tax: Tax4;
  moreTaxesAndFees: MoreTaxesAndFees4;
  discount: Discount4;
  totalWithoutDiscount: TotalWithoutDiscount4;
}

interface Total4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MoreTaxesAndFees4 {}

interface Discount4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Ancillaries {
  flexibleTicket?: FlexibleTicket2;
}

interface FlexibleTicket2 {
  airProductReference: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown4;
  preSelected: boolean;
}

interface PriceBreakdown4 {
  total: Total5;
  baseFare: BaseFare5;
  fee: Fee5;
  tax: Tax5;
  moreTaxesAndFees: MoreTaxesAndFees5;
  discount: Discount5;
  totalWithoutDiscount: TotalWithoutDiscount5;
}

interface Total5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MoreTaxesAndFees5 {}

interface Discount5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface SeatAvailability {
  numberOfSeatsAvailable: number;
}

interface ExtraProductDisplayRequirements {}

interface BrandedFareInfo {
  fareName: string;
  cabinClass: string;
}

interface FlightDeal {
  key: string;
  offerToken: string;
  price: Price;
  travellerPrices: TravellerPrice2[];
}

interface Price {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TravellerPrice2 {
  travellerPriceBreakdown: TravellerPriceBreakdown2;
  travellerReference: string;
  travellerType: string;
}

interface TravellerPriceBreakdown2 {
  total: Total6;
  baseFare: BaseFare6;
  fee: Fee6;
  tax: Tax6;
  moreTaxesAndFees: MoreTaxesAndFees6;
  discount: Discount6;
  totalWithoutDiscount: TotalWithoutDiscount6;
}

interface Total6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MoreTaxesAndFees6 {}

interface Discount6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaggagePolicy {
  code: string;
  name: string;
  url: string;
}
