import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from '@store/router/router.selectors';

import { FlightsState } from './flights.reducer';

export const selectFlightsStore =
  createFeatureSelector<FlightsState>('flights');

export const selectFlights = createSelector(
  selectFlightsStore,
  (state: FlightsState) => state.flights
);

export const selectFlightsError = createSelector(
  selectFlightsStore,
  (state: FlightsState) => state.error
);

export const selectFlightsIsLoading = createSelector(
  selectFlightsStore,
  (state: FlightsState) => state.isLoading
);

export const selectFlightsSearchParams = createSelector(
  selectFlightsStore,
  (state: FlightsState) => state.searchParams
);

export const selectDetailsFlightId = createSelector(
  selectRouteParams,
  ({ flightId }) => {
    return flightId as string;
  }
);
