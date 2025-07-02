import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  IStaysSearchFilters,
  IStaysSearchParams,
} from '@shared/interfaces/stays';
import { IStay } from '@shared/models/stays';

const actionSource = '[Stays]';

export const FetchStays = createAction(
  `${actionSource} Fetch`,
  props<{
    searchParams: IStaysSearchParams;
    filters: IStaysSearchFilters;
  }>()
);

export const FetchStaysSuccess = createAction(
  `${actionSource} Fetch Success`,
  props<{ stays: IStay[]; totalCount: number }>()
);

export const FetchStaysFailed = createAction(
  `${actionSource} Fetch Failed`,
  props<{ error: HttpErrorResponse }>()
);

export const SetStaysFilters = createAction(
  `${actionSource} Set Stays Filters`,
  props<{ filters: IStaysSearchFilters }>()
);
