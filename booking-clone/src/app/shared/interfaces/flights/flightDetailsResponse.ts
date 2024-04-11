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
  ancillaries: Ancillaries | null;
  fareRulesStatus: FareRulesStatus;
  seatAvailability: SeatAvailability;
  baggagePolicies: BaggagePolicy[];
  extraProductDisplayRequirements: ExtraProductDisplayRequirements;
  carbonEmissions: CarbonEmissions;
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
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
}

interface ArrivalAirport {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
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
  departureTerminal: string;
  arrivalTerminal?: string;
}

interface DepartureAirport2 {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
}

interface ArrivalAirport2 {
  type: string;
  code: string;
  name: string;
  city: string;
  cityName: string;
  country: string;
  countryName: string;
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
  maxWeightPerPiece: number;
  massUnit: string;
}

interface TravellerCabinLuggage {
  travellerReference: string;
  luggageAllowance: LuggageAllowance2 | null;
  personalItem: boolean;
}

interface LuggageAllowance2 {
  luggageType: string;
  maxPiece: number;
  maxWeightPerPiece: number | null;
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

interface Traveller {
  travellerReference: string;
  type: string;
}

interface PosMismatch {
  detectedPointOfSale: string;
  isPOSMismatch: boolean;
  offerSalesCountry: string;
}

interface IncludedProductsBySegment {
  travellerReference: string;
  travellerProducts: TravellerProduct[];
}

interface TravellerProduct {
  type: string;
  product?: Product;
}

interface Product {
  luggageType: string;
  ruleType?: string;
  maxPiece: number;
  maxWeightPerPiece: number;
  massUnit: string;
  sizeRestrictions?: SizeRestrictions2;
}

interface SizeRestrictions2 {
  maxLength: number;
  maxWidth: number;
  maxHeight: number;
  sizeUnit: string;
}

interface IncludedProducts {
  areAllSegmentsIdentical: boolean;
  segments: Segment2[][];
}

interface Segment2 {
  luggageType: string;
  maxPiece: number;
  piecePerPax: number;
  maxWeightPerPiece?: number;
  massUnit?: string;
  sizeRestrictions?: SizeRestrictions3;
  ruleType?: string;
}

interface SizeRestrictions3 {
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
  flexibleTicket: FlexibleTicket;
  mobileTravelPlan: MobileTravelPlan;
}

interface FlexibleTicket {
  airProductReference: string;
  travellers: string[];
  recommendation: Recommendation;
  priceBreakdown: PriceBreakdown3;
}

interface Recommendation {
  recommended: boolean;
  confidence: string;
}

interface PriceBreakdown3 {
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

interface TotalRounded3 {
  currencyCode: string;
  nanos: number;
  units: number;
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

interface TotalWithoutDiscountRounded3 {
  currencyCode: string;
  nanos: number;
  units: number;
}

interface MobileTravelPlan {
  priceBreakdown: PriceBreakdown4;
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

interface Ancillaries {
  flexibleTicket: FlexibleTicket2;
  mobileTravelPlan: MobileTravelPlan2;
  travelInsurance: TravelInsurance | null;
}

interface FlexibleTicket2 {
  airProductReference: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown5;
  preSelected: boolean;
  recommendation: Recommendation2;
}

interface PriceBreakdown5 {
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

interface Recommendation2 {
  recommended: boolean;
  confidence: string;
}

interface MobileTravelPlan2 {
  priceBreakdown: PriceBreakdown6;
}

interface PriceBreakdown6 {
  total: Total7;
  baseFare: BaseFare7;
  fee: Fee7;
  tax: Tax7;
  moreTaxesAndFees: MoreTaxesAndFees7;
  discount: Discount7;
  totalWithoutDiscount: TotalWithoutDiscount7;
}

interface Total7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MoreTaxesAndFees7 {}

interface Discount7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount7 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TravelInsurance {
  options: Options;
  documents: Documents;
  content: Content | null;
  forceForAllTravellers: boolean;
}

interface Options {
  type: string;
  travellers: string[];
  priceBreakdown: PriceBreakdown7;
  disclaimer: string;
  termsAndConditionsUrl: string;
  productInformationDocumentUrl: string;
}

interface PriceBreakdown7 {
  total: Total8;
  baseFare: BaseFare8;
  fee: Fee8;
  tax: Tax8;
  moreTaxesAndFees: MoreTaxesAndFees8;
  discount: Discount8;
  totalWithoutDiscount: TotalWithoutDiscount8;
}

interface Total8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface BaseFare8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Fee8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Tax8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface MoreTaxesAndFees8 {}

interface Discount8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface TotalWithoutDiscount8 {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Documents {
  terms_and_conditions: string;
}

interface Content {
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

interface FareRulesStatus {
  legs: Leg2[];
  areAllStatusesIdentical: boolean;
  areAllCarriersIdentical: boolean;
}

interface Leg2 {
  legIdentifier: LegIdentifier;
  carrierName: string;
  changeable: string;
  refundable: string;
}

interface LegIdentifier {
  segmentIndex: number;
  legIndex: number;
}

interface SeatAvailability {
  numberOfSeatsAvailable: number;
}

interface BaggagePolicy {
  code: string;
  name: string;
  url: string;
}

interface ExtraProductDisplayRequirements {}

interface CarbonEmissions {
  footprintForOffer: FootprintForOffer;
}

interface FootprintForOffer {
  quantity: number;
  unit: string;
  status: string;
  average: number;
  percentageDifference: number;
}
