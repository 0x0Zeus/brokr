import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  IFlightsSearchFilters,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import { IFlight } from '@shared/models/flights';

const actionSource = '[Flights]';

export const FetchFlights = createAction(
  `${actionSource} Fetch`,
  props<{
    searchParams: IFlightsSearchParams;
    filters: IFlightsSearchFilters;
  }>()
);

export const FetchFlightsSuccess = createAction(
  `${actionSource} Fetch Success`,
  props<{ flights: IFlight[] }>()
);

export const FetchFlightsFailed = createAction(
  `${actionSource} Fetch Failed`,
  props<{ error: HttpErrorResponse }>()
);

export const SetFlightsFilters = createAction(
  `${actionSource} Set Flights Filters`,
  props<{ filters: IFlightsSearchFilters }>()
);
