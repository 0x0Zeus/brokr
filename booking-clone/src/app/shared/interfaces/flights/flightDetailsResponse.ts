export interface IFlightDetailsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: IFlightDetailsDataResponse;
}

export interface IFlightDetailsDataResponse {
  token: string;
  segments: Segment[];
  priceBreakdown: PriceBreakdown;
  travellerPrices: TravellerPrice[];
  pointOfSale: string;
  tripType: string;
  offerReference: string;
  bookerDataRequirement: string[];
  travellers: Traveller[];
  posMismatch: PosMismatch;
  includedProductsBySegment: IncludedProductsBySegment[][];
  includedProducts: IncludedProducts;
  extraProducts: ExtraProduct[];
  offerExtras: OfferExtras;
  ancillaries: Ancillaries;
  fareRulesStatus: FareRulesStatus;
  seatAvailability: SeatAvailability;
  baggagePolicies: BaggagePolicy[];
  extraProductDisplayRequirements: ExtraProductDisplayRequirements;
  carbonEmissions: CarbonEmissions;
}

export interface Segment {
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

export interface DepartureAirport {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
}

export interface ArrivalAirport {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
}

export interface Leg {
  departureTime: string;
  arrivalTime: string;
  departureAirport: DepartureAirport2;
  arrivalAirport: ArrivalAirport2;
  cabinClass: string;
  flightInfo: FlightInfo;
  carriers: string[];
  carriersData: CarriersDaum[];
  totalTime: number;
  departureTerminal: string;
  arrivalTerminal?: string;
}

export interface DepartureAirport2 {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
}

export interface ArrivalAirport2 {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
}

export interface FlightInfo {
  flightNumber: number;
  planeType: string;
  carrierInfo: CarrierInfo;
}

export interface CarrierInfo {
  operatingCarrier: string;
  marketingCarrier: string;
  operatingCarrierDisclosureText: string;
}

export interface CarriersDaum {
  name: string;
  code: string;
  logo: string;
}

export interface TravellerCheckedLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance;
}

export interface LuggageAllowance {
  luggageType: string;
  ruleType: string;
  maxPiece: number;
  maxWeightPerPiece: number;
  massUnit: string;
}

export interface TravellerCabinLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance2;
  personalItem: boolean;
}

export interface LuggageAllowance2 {
  luggageType: string;
  maxPiece: number;
  maxWeightPerPiece: number;
  massUnit: string;
  sizeRestrictions: SizeRestrictions;
}

export interface SizeRestrictions {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

export interface PriceBreakdown {
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

export interface Total {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalRounded {
  currencyCode: string;
  nanos: number;
  units: number;
}

export interface MoreTaxesAndFees {}

export interface Discount {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscountRounded {
  currencyCode: string;
  nanos: number;
  units: number;
}

export interface CarrierTaxBreakdown {
  carrier: Carrier;
  avgPerAdult: AvgPerAdult;
}

export interface Carrier {
  name: string;
  code: string;
  logo: string;
}

export interface AvgPerAdult {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TravellerPrice {
  travellerPriceBreakdown: TravellerPriceBreakdown;
  travellerReference: string;
  travellerType: string;
}

export interface TravellerPriceBreakdown {
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

export interface Total2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalRounded2 {
  currencyCode: string;
  nanos: number;
  units: number;
}

export interface MoreTaxesAndFees2 {}

export interface Discount2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount2 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscountRounded2 {
  currencyCode: string;
  nanos: number;
  units: number;
}

export interface Traveller {
  travellerReference: string;
  type: string;
}

export interface PosMismatch {
  detectedPointOfSale: string;
  isPOSMismatch: boolean;
  offerSalesCountry: string;
}

export interface IncludedProductsBySegment {
  travellerReference: string;
  travellerProducts: TravellerProduct[];
}

export interface TravellerProduct {
  type: string;
  product?: Product;
}

export interface Product {
  luggageType: string;
  ruleType?: string;
  maxPiece: number;
  maxWeightPerPiece: number;
  massUnit: string;
  sizeRestrictions?: SizeRestrictions2;
}

export interface SizeRestrictions2 {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

export interface IncludedProducts {
  areAllSegmentsIdentical: boolean;
  segments: Segment2[][];
}

export interface Segment2 {
  luggageType: string;
  maxPiece: number;
  piecePerPax: number;
  maxWeightPerPiece?: number;
  massUnit?: string;
  sizeRestrictions?: SizeRestrictions3;
  ruleType?: string;
}

export interface SizeRestrictions3 {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

export interface ExtraProduct {
  type: string;
  priceBreakdown: PriceBreakdown2;
}

export interface PriceBreakdown2 {
  total: Total3;
  baseFare: BaseFare3;
  fee: Fee3;
  tax: Tax3;
  moreTaxesAndFees: MoreTaxesAndFees3;
  discount: Discount3;
  totalWithoutDiscount: TotalWithoutDiscount3;
}

export interface Total3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface MoreTaxesAndFees3 {}

export interface Discount3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount3 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface OfferExtras {
  flexibleTicket: FlexibleTicket;
  mobileTravelPlan: MobileTravelPlan;
}

export interface FlexibleTicket {
  airProductReference: string;
  travellers: string[];
  recommendation: Recommendation;
  priceBreakdown: PriceBreakdown3;
}

export interface Recommendation {
  recommended: boolean;
  confidence: string;
}

export interface PriceBreakdown3 {
  total: Total4;
  baseFare: BaseFare4;
  fee: Fee4;
  tax: Tax4;
  totalRounded: TotalRounded3;
  moreTaxesAndFees: MoreTaxesAndFees4;
  discount: Discount4;
  totalWithoutDiscount: TotalWithoutDiscount4;
  totalWithoutDiscountRounded: TotalWithoutDiscountRounded3;
}

export interface Total4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalRounded3 {
  currencyCode: string;
  nanos: number;
  units: number;
}

export interface MoreTaxesAndFees4 {}

export interface Discount4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount4 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscountRounded3 {
  currencyCode: string;
  nanos: number;
  units: number;
}

export interface MobileTravelPlan {
  priceBreakdown: PriceBreakdown4;
}

export interface PriceBreakdown4 {
  total: Total5;
  baseFare: BaseFare5;
  fee: Fee5;
  tax: Tax5;
  moreTaxesAndFees: MoreTaxesAndFees5;
  discount: Discount5;
  totalWithoutDiscount: TotalWithoutDiscount5;
}

export interface Total5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface MoreTaxesAndFees5 {}

export interface Discount5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount5 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Ancillaries {
  flexibleTicket: FlexibleTicket2;
  mobileTravelPlan: MobileTravelPlan2;
  travelInsurance: TravelInsurance;
}

export interface FlexibleTicket2 {
  airProductReference: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown5;
  preSelected: boolean;
  recommendation: Recommendation2;
}

export interface PriceBreakdown5 {
  total: Total6;
  baseFare: BaseFare6;
  fee: Fee6;
  tax: Tax6;
  moreTaxesAndFees: MoreTaxesAndFees6;
  discount: Discount6;
  totalWithoutDiscount: TotalWithoutDiscount6;
}

export interface Total6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface MoreTaxesAndFees6 {}

export interface Discount6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount6 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Recommendation2 {
  recommended: boolean;
  confidence: string;
}

export interface MobileTravelPlan2 {
  priceBreakdown: PriceBreakdown6;
}

export interface PriceBreakdown6 {
  total: Total7;
  baseFare: BaseFare7;
  fee: Fee7;
  tax: Tax7;
  moreTaxesAndFees: MoreTaxesAndFees7;
  discount: Discount7;
  totalWithoutDiscount: TotalWithoutDiscount7;
}

export interface Total7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface MoreTaxesAndFees7 {}

export interface Discount7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TravelInsurance {
  options: Options;
  documents: Documents;
  content: Content;
  forceForAllTravellers: boolean;
}

export interface Options {
  type: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown7;
  disclaimer: string;
  termsAndConditionsUrl: string;
  productInformationDocumentUrl: string;
}

export interface PriceBreakdown7 {
  total: Total8;
  baseFare: BaseFare8;
  fee: Fee8;
  tax: Tax8;
  moreTaxesAndFees: MoreTaxesAndFees8;
  discount: Discount8;
  totalWithoutDiscount: TotalWithoutDiscount8;
}

export interface Total8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface BaseFare8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Fee8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Tax8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface MoreTaxesAndFees8 {}

export interface Discount8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface TotalWithoutDiscount8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

export interface Documents {
  terms_and_conditions: string;
}

export interface Content {
  header: string;
  subheader: string;
  optInTitle: string;
  optOutTitle: string;
  exclusions: string[];
  coveredStatusLabel: string;
  notCoveredStatusLabel: string;
  benefitsTitle: string;
  benefits: string[];
  finePrint: string[];
}

export interface FareRulesStatus {
  legs: Leg2[];
  areAllStatusesIdentical: boolean;
  areAllCarriersIdentical: boolean;
}

export interface Leg2 {
  legIdentifier: LegIdentifier;
  carrierName: string;
  changeable: string;
  refundable: string;
}

export interface LegIdentifier {
  segmentIndex: number;
  legIndex: number;
}

export interface SeatAvailability {
  numberOfSeatsAvailable: number;
}

export interface BaggagePolicy {
  code: string;
  name: string;
  url: string;
}

export interface ExtraProductDisplayRequirements {}

export interface CarbonEmissions {
  footprintForOffer: FootprintForOffer;
}

export interface FootprintForOffer {
  quantity: number;
  unit: string;
  status: string;
  average: number;
  percentageDifference: number;
}
