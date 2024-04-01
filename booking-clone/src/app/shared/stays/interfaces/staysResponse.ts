export interface IStaysResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    hotels: IStayResponse[];
  };
}

interface IStayResponse {
  accessibilityLabel: string;
  property: {
    reviewScoreWord: string;
    accuratePropertyClass: number;
    reviewCount: number;
    ufi: number;
    isPreferred: boolean;
    isFirstPage: boolean;
    checkin: {
      untilTime: string;
      fromTime: string;
    };
    qualityClass: number;
    rankingPosition: number;
    reviewScore: number;
    countryCode: string;
    propertyClass: number;
    photoUrls: string[];
    checkoutDate: string;
    position: number;
    latitude: number;
    checkout: {
      fromTime: string;
      untilTime: string;
    };
    priceBreakdown: {
      benefitBadges: string[];
      grossPrice: {
        currency: string;
        value: number;
      };
      taxExceptions: string[];
    };
    optOutFromGalleryChanges: number;
    wishlistName: string;
    blockIds: string[];
    currency: string;
    checkinDate: string;
    id: number;
    mainPhotoId: number;
    name: string;
    longitude: number;
  };
}
