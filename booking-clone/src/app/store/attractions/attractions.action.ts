import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  IAttractionsSearchFilters,
  IAttractionsSearchParams,
} from '@shared/interfaces/attractions';
import { IAttraction } from '@shared/models/attractions';

const actionSource = '[Attractions]';

export const FetchAttractions = createAction(
  `${actionSource} Fetch`,
  props<{
    searchParams: IAttractionsSearchParams;
    filters: IAttractionsSearchFilters;
  }>()
);

export const FetchAttractionsSuccess = createAction(
  `${actionSource} Fetch Success`,
  props<{ attractions: IAttraction[]; totalCount: number }>()
);

export const FetchAttractionsFailed = createAction(
  `${actionSource} Fetch Failed`,
  props<{ error: HttpErrorResponse }>()
);

export const SetAttractionsFilters = createAction(
  `${actionSource} Set Attractions Filters`,
  props<{ filters: IAttractionsSearchFilters }>()
);
