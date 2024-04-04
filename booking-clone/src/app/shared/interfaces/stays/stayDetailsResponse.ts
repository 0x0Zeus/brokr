export interface IStayDetailsResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: IStayDetailsDataResponse;
}

export interface IStayDetailsDataResponse {
  ufi: number;
  hotel_id: number;
  hotel_name: string;
  url: string;
  hotel_name_trans: string;
  review_nr: number;
  arrival_date: string;
  departure_date: string;
  price_transparency_mode: string;
  accommodation_type_name: string;
  latitude: number;
  longitude: number;
  address: string;
  address_trans: string;
  city: string;
  city_trans: string;
  city_in_trans: string;
  city_name_en: string;
  district: string;
  countrycode: string;
  distance_to_cc: number;
  default_language: string;
  country_trans: string;
  currency_code: string;
  zip: string;
  timezone: string;
  rare_find_state: string;
  soldout: number;
  available_rooms: number;
  max_rooms_in_reservation: number;
  average_room_size_for_ufi_m2: string;
  is_family_friendly: number;
  is_closed: number;
  is_crimea: number;
  is_hotel_ctrip: number;
  is_price_transparent: number;
  is_genius_deal: number;
  is_cash_accepted_check_enabled: number;
  qualifies_for_no_cc_reservation: number;
  hotel_include_breakfast: number;
  cc1: string;
  family_facilities: string[];
  product_price_breakdown: ProductPriceBreakdown;
  composite_price_breakdown: CompositePriceBreakdown;
  property_highlight_strip: PropertyHighlightStrip[];
  sustainability: Sustainability;
  facilities_block: FacilitiesBlock;
  top_ufi_benefits: TopUfiBenefit[];
  languages_spoken: LanguagesSpoken;
  spoken_languages: string[];
  breakfast_review_score: BreakfastReviewScore;
  wifi_review_score: WifiReviewScore;
  info_banners: InfoBanner[];
  min_room_distribution: MinRoomDistribution;
  booking_home: BookingHome;
  aggregated_data: AggregatedData;
  last_reservation: LastReservation;
  free_facilities_cancel_breakfast: FreeFacilitiesCancelBreakfast[];
  room_recommendation: RoomRecommendation[];
  hotel_text: HotelText;
  districts: number[];
  hotel_important_information_with_codes: HotelImportantInformationWithCode[];
  rooms: Rooms;
  block: Block[];
}

interface ProductPriceBreakdown {
  charges_details: ChargesDetails;
  nr_stays: number;
  has_long_stays_weekly_rate_price: number;
  has_long_stays_monthly_rate_price: number;
  excluded_amount: ExcludedAmount;
  gross_amount_hotel_currency: GrossAmountHotelCurrency;
  included_taxes_and_charges_amount: IncludedTaxesAndChargesAmount;
  items: Item[];
  gross_amount_per_night: GrossAmountPerNight;
  all_inclusive_amount: AllInclusiveAmount;
  net_amount: NetAmount;
  gross_amount: GrossAmount;
}

interface ChargesDetails {
  amount: Amount;
  mode: string;
  translated_copy: string;
}

interface Amount {
  value: number;
  currency: string;
}

interface ExcludedAmount {
  currency: string;
  value: number;
}

interface GrossAmountHotelCurrency {
  value: number;
  currency: string;
}

interface IncludedTaxesAndChargesAmount {
  value: number;
  currency: string;
}

interface Item {
  name: string;
  item_amount: ItemAmount;
  kind: string;
  base: Base;
  inclusion_type: string;
}

interface ItemAmount {
  value: number;
  currency: string;
}

interface Base {
  base_amount: number;
  kind: string;
}

interface GrossAmountPerNight {
  value: number;
  currency: string;
}

interface AllInclusiveAmount {
  currency: string;
  value: number;
}

interface NetAmount {
  currency: string;
  value: number;
}

interface GrossAmount {
  value: number;
  currency: string;
}

interface CompositePriceBreakdown {
  included_taxes_and_charges_amount: IncludedTaxesAndChargesAmount2;
  gross_amount_hotel_currency: GrossAmountHotelCurrency2;
  has_long_stays_weekly_rate_price: number;
  has_long_stays_monthly_rate_price: number;
  excluded_amount: ExcludedAmount2;
  charges_details: ChargesDetails2;
  all_inclusive_amount: AllInclusiveAmount2;
  net_amount: NetAmount2;
  gross_amount: GrossAmount2;
  items: Item2[];
  gross_amount_per_night: GrossAmountPerNight2;
}

interface IncludedTaxesAndChargesAmount2 {
  value: number;
  currency: string;
}

interface GrossAmountHotelCurrency2 {
  currency: string;
  value: number;
}

interface ExcludedAmount2 {
  currency: string;
  value: number;
}

interface ChargesDetails2 {
  mode: string;
  amount: Amount2;
  translated_copy: string;
}

interface Amount2 {
  value: number;
  currency: string;
}

interface AllInclusiveAmount2 {
  currency: string;
  value: number;
}

interface NetAmount2 {
  value: number;
  currency: string;
}

interface GrossAmount2 {
  value: number;
  currency: string;
}

interface Item2 {
  name: string;
  item_amount: ItemAmount2;
  kind: string;
  base: Base2;
  inclusion_type: string;
}

interface ItemAmount2 {
  currency: string;
  value: number;
}

interface Base2 {
  kind: string;
  base_amount: number;
}

interface GrossAmountPerNight2 {
  value: number;
  currency: string;
}

interface PropertyHighlightStrip {
  name: string;
  icon_list: IconList[];
}

interface IconList {
  size: number;
  icon: string;
}

interface Sustainability {
  sustainability_page: SustainabilityPage;
  hotel_page: HotelPage;
  sustainability_level: SustainabilityLevel;
}

interface SustainabilityPage {
  tier: string;
  description: string;
  sustainable_facility_count: number;
  title: string;
  level_details: string;
  level: string;
  cta: string;
  efforts: Effort[];
  has_programmes: number;
}

interface Effort {
  icon: string;
  title: string;
  steps: string[];
}

interface HotelPage {
  has_badge: number;
  title: string;
  cta: string;
  description: string;
}

interface SustainabilityLevel {
  name: string;
  id: number;
  title: string;
}

interface FacilitiesBlock {
  facilities: Facility[];
  name: string;
  type: string;
}

interface Facility {
  name: string;
  icon: string;
}

interface TopUfiBenefit {
  translated_name: string;
  icon: string;
}

interface LanguagesSpoken {
  languagecode: string[];
}

interface BreakfastReviewScore {
  rating: number;
  review_score: number;
  review_snippet: string;
  review_score_word: string;
  review_number: number;
  review_count: number;
}

interface WifiReviewScore {
  rating: number;
}

interface InfoBanner {
  primary_action: PrimaryAction;
  type: string;
  is_default_collapsed: number;
  priority: number;
  secondary_action: SecondaryAction;
  title: string;
  position_to_inject: number;
  collapsible: number;
  id: string;
  show_after_dismissed_time: number;
  messages: string[];
  show_after_dismissed: number;
  dismissable: number;
}

interface PrimaryAction {
  action_context: string;
  action: string;
  text: string;
}

interface SecondaryAction {}

interface MinRoomDistribution {
  adults: number;
}

interface BookingHome {}

interface AggregatedData {
  has_refundable: number;
  has_nonrefundable: number;
  has_seating: number;
  has_kitchen: number;
  common_kitchen_fac: CommonKitchenFac[];
}

interface CommonKitchenFac {
  name: string;
  id: number;
}

interface LastReservation {
  time: string;
}

interface FreeFacilitiesCancelBreakfast {
  facility_id: number;
}

interface RoomRecommendation {
  children: number;
  babies: number;
  block_id: string;
  extra_babycots_price: number;
  extra_beds_for_children_price: number;
  number_of_extra_babycots: number;
  adults: number;
  total_extra_bed_price: number;
  extra_beds_for_children_price_in_hotel_currency: number;
  number_of_extra_beds_for_children: number;
  extra_babycots_price_in_hotel_currency: number;
  number_of_extra_beds_for_adults: number;
  total_extra_bed_price_in_hotel_currency: number;
  extra_beds_for_adults_price: number;
  number_of_extra_beds_and_babycots_total: number;
  extra_beds_for_adults_price_in_hotel_currency: number;
}

interface HotelText {}

interface HotelImportantInformationWithCode {
  phrase: string;
  executing_phase: number;
  sentence_id: number;
}

interface Rooms {
  [key: string]: IRoomInfo;
}

interface IRoomInfo {
  private_bathroom_highlight: PrivateBathroomHighlight;
  facilities: Facility2[];
  photos: Photo[];
  is_high_floor_guaranteed: number;
  bed_configurations: BedConfiguration[];
  cribs_extra_beds: CribsExtraBeds;
  highlights: Highlight[];
  children_and_beds_text: ChildrenAndBedsText;
  private_bathroom_count: number;
  description: string;
}

interface PrivateBathroomHighlight {
  has_highlight: number;
}

interface Facility2 {
  name: string;
  alt_facilitytype_id: number;
  id: number;
  facilitytype_name: string;
  facilitytype_id: number;
  alt_facilitytype_name: string;
}

interface Photo {
  url_max750: string;
  last_update_date: string;
  url_square180: string;
  url_max1280: string;
  ratio: number;
  url_original: string;
  url_square60: string;
  url_640x200: string;
  photo_id: number;
  url_max300: string;
  new_order: number;
}

interface BedConfiguration {
  bed_types: BedType[];
}

interface BedType {
  bed_type: number;
  name_with_count: string;
  count: number;
  description: string;
  name: string;
  description_imperial: string;
}

interface CribsExtraBeds {
  extra_beds: ExtraBeds;
}

interface ExtraBeds {
  all_free: number;
  max_count: number;
  ages: number[];
}

interface Highlight {
  icon: string;
  translated_name: string;
  id?: number;
}

interface ChildrenAndBedsText {
  age_intervals: AgeInterval[];
  allow_children: number;
  children_at_the_property: ChildrenAtTheProperty[];
  cribs_and_extra_beds: CribsAndExtraBed[];
}

interface AgeInterval {
  types_by_price: string[][];
  max_age: number;
  min_age: number;
  crib?: Crib;
  extra_bed?: ExtraBed;
}

interface Crib {
  id: number;
  price_type_n: number;
  price_mode: string;
  price_type: string;
  price: number;
  price_mode_n: number;
}

interface ExtraBed {
  id: number;
  price_mode: string;
  price_type_n: number;
  price: string;
  price_mode_n: number;
  price_type: string;
}

interface ChildrenAtTheProperty {
  text: string;
  highlight: number;
}

interface CribsAndExtraBed {
  highlight: number;
  text: string;
}

interface Block {
  nr_children: number;
  refundable: number;
  room_name: string;
  room_id: number;
  name_without_policy: string;
  number_of_bedrooms: number;
  refundable_until_epoch: number;
  paymentterms: Paymentterms;
  room_count: number;
  room_surface_in_m2: number;
  smoking: number;
  max_children_free_age: number;
  mealplan: string;
  is_domestic_rate: number;
  must_reserve_free_parking: number;
  is_block_fit: number;
  max_occupancy: string;
  genius_discount_percentage: number;
  extrabed_available: number;
  deposit_required: number;
  breakfast_included: number;
  block_id: string;
  roomtype_id: number;
  all_inclusive: number;
  refundable_until: string;
  name: string;
  is_last_minute_deal: number;
  can_reserve_free_parking: number;
  babycots_available: number;
  is_flash_deal: number;
  room_surface_in_feet2: number;
  number_of_bathrooms: number;
  nr_adults: number;
  half_board: number;
  is_secret_deal: number;
  pod_ios_migrate_policies_to_smp_fullon: number;
  is_smart_deal: number;
  block_text: BlockText;
  deals: Deals;
  full_board: number;
  max_children_free: number;
}

interface Paymentterms {
  cancellation: Cancellation;
  prepayment: Prepayment;
}

interface Cancellation {
  description: string;
  info: Info;
  guaranteed_non_refundable: number;
  type_translation: string;
  bucket: string;
  type: string;
  non_refundable_anymore: number;
  timeline: Timeline;
}

interface Info {
  timezone: string;
  date: string;
  time: string;
  date_before: string | null;
  is_midnight: string;
  refundable: number;
  date_raw: string;
  timezone_offset: string;
  date_before_raw: string;
}

interface Timeline {
  u_currency_code: string;
  currency_code: string;
  stages: Stage[];
  policygroup_instance_id: string;
  nr_stages: number;
}

interface Stage {
  limit_from: string;
  text: string;
  limit_from_date: string;
  fee_remaining: number;
  fee_pretty: string;
  stage_translation: string;
  text_refundable: string;
  b_number: number;
  u_stage_fee_pretty: string;
  limit_from_raw: string;
  fee: number;
  is_effective: number;
  limit_until_time: string;
  b_state: string;
  effective_number: number;
  fee_rounded: number;
  current_stage: number;
  u_fee_remaining_pretty: string;
  u_fee_remaining: string;
  date_until?: string;
  is_free: number;
  limit_until: string;
  u_stage_fee: string;
  limit_until_date: string;
  u_fee: string;
  limit_until_raw: string;
  u_fee_pretty: string;
  limit_from_time: string;
  stage_fee_pretty: string;
  fee_remaining_pretty: string;
  limit_timezone: string;
  stage_fee: number;
  date_from?: string;
  amount?: number;
  amount_pretty?: string;
}

interface Prepayment {
  description: string;
  simple_translation: string;
  type_extended: string;
  extended_type_translation: string;
  type: string;
  type_translation: string;
  timeline: Timeline2;
}

interface Timeline2 {
  u_currency_code: string;
  currency_code: string;
  policygroup_instance_id: string;
  stages: Stage2[];
  nr_stages: number;
}

interface Stage2 {
  amount_pretty: string;
  fee_remaining?: number;
  limit_from_date?: string;
  fee_pretty?: string;
  text: string;
  limit_from?: string;
  current_stage?: number;
  effective_number?: number;
  b_state?: string;
  limit_until_time?: string;
  fee_rounded?: number;
  limit_from_raw?: string;
  fee?: number;
  u_stage_fee_pretty?: string;
  amount: string;
  is_effective?: number;
  b_number?: number;
  u_stage_fee?: string;
  is_free: number;
  limit_until?: string;
  u_fee_remaining?: string;
  u_fee_remaining_pretty?: string;
  stage_fee?: number;
  limit_timezone?: string;
  stage_fee_pretty?: string;
  fee_remaining_pretty?: string;
  limit_from_time?: string;
  u_fee_pretty?: string;
  u_fee?: string;
  limit_until_date?: string;
  limit_until_raw?: string;
  after_checkin?: number;
}

interface BlockText {
  policies: Policy[];
}

interface Policy {
  class: string;
  content: string;
  mealplan_vector?: string;
}

interface Deals {
  deal_attributes: DealAttributes;
}

interface DealAttributes {
  has_secret_channel_option: number;
}
