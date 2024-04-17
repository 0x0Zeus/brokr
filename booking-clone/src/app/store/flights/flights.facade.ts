import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IFlightsSearchFilters,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';

import * as FLIGHTS_ACTIONS from './flights.action';
import {
  selectDetailsFlightId,
  selectFlights,
  selectFlightsError,
  selectFlightsFilters,
  selectFlightsIsLoading,
  selectFlightsSearchParams,
  selectFlightsTotalCount,
} from './flights.selector';

@Injectable({
  providedIn: 'root',
})
export class FlightsFacade {
  flights$ = this.store.select(selectFlights);
  flightsIsLoading$ = this.store.select(selectFlightsIsLoading);
  flightsSearchParams$ = this.store.select(selectFlightsSearchParams);
  flightsSearchFilters$ = this.store.select(selectFlightsFilters);
  flightsTotalCount$ = this.store.select(selectFlightsTotalCount);
  flightsError$ = this.store.select(selectFlightsError);
  flightDetailsId$ = this.store.select(selectDetailsFlightId);

  constructor(private store: Store) {}

  fetchFlights(
    searchParams: IFlightsSearchParams,
    filters: IFlightsSearchFilters
  ) {
    this.store.dispatch(
      FLIGHTS_ACTIONS.FetchFlights({
        searchParams,
        filters,
      })
    );
  }

  setFlightsFilters(filters: IFlightsSearchFilters) {
    this.store.dispatch(
      FLIGHTS_ACTIONS.SetFlightsFilters({
        filters,
      })
    );
  }
}
