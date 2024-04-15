import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import {
  IFlightsSearchFilters,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import { IFlight } from '@shared/models/flights';

import * as FLIGHTS_ACTIONS from './flights.action';

export interface FlightsState {
  flights: IFlight[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
  searchParams: null | IFlightsSearchParams;
  filters: IFlightsSearchFilters;
}

export const initialState: FlightsState = {
  flights: [],
  isLoading: false,
  error: null,
  searchParams: null,
  filters: {
    adults: null,
    cabinClass: null,
    sortBy: null,
  },
};

export const flightsReducer = createReducer(
  initialState,
  on(
    FLIGHTS_ACTIONS.FetchFlights,
    (state, { searchParams, filters }): FlightsState => {
      if (searchParams.page === 1) {
        return {
          ...state,
          searchParams,
          filters,
          flights: [],
          isLoading: true,
        };
      } else {
        return {
          ...state,
          searchParams,
          filters,
          isLoading: true,
        };
      }
    }
  ),
  on(
    FLIGHTS_ACTIONS.FetchFlightsSuccess,
    (state, { flights }): FlightsState => {
      if (state.searchParams && state.searchParams.page === 1) {
        return {
          ...state,
          flights,
          isLoading: false,
        };
      } else {
        return {
          ...state,
          flights: [...state.flights].concat(flights),
          isLoading: false,
        };
      }
    }
  ),
  on(
    FLIGHTS_ACTIONS.FetchFlightsFailed,
    (state, { error }): FlightsState => ({
      ...state,
      error,
      flights: [],
      isLoading: false,
    })
  ),
  on(
    FLIGHTS_ACTIONS.SetFlightsFilters,
    (state, { filters }): FlightsState => ({
      ...state,
      filters,
    })
  )
);
