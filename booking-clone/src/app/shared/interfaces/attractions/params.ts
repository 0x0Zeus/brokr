import { IAttraction } from '@shared/models/attractions';

export interface IAttractionsSearchParams {
  attractionId: string;
  page: number;
}

export interface IAttractionsSearchFilters {
  sortBy: string | null;
}

export interface IAttractionsInfoData {
  attractions: IAttraction[];
  totalCount: number;
}
