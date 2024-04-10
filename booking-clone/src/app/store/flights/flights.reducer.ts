import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { IFlightsSearchParams } from '@shared/interfaces/flights';
import { IFlight } from '@shared/models/flights';

import * as FLIGHTS_ACTIONS from './flights.action';

export interface FlightsState {
  flights: IFlight[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
  searchParams: null | IFlightsSearchParams;
}

export const initialState: FlightsState = {
  flights: [],
  isLoading: false,
  error: null,
  searchParams: null,
};

export const flightsReducer = createReducer(
  initialState,
  on(FLIGHTS_ACTIONS.FetchFlights, (state, { searchParams }): FlightsState => {
    if (searchParams.page === 1) {
      return {
        ...state,
        searchParams,
        flights: [],
        isLoading: true,
      };
    } else {
      return {
        ...state,
        searchParams,
        isLoading: true,
      };
    }
  }),
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
  )
);
