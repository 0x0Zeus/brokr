import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFlightsSearchParams } from '@shared/interfaces/flights';

import * as FLIGHTS_ACTIONS from './flights.action';
import {
  selectDetailsFlightId,
  selectFlights,
  selectFlightsError,
  selectFlightsIsLoading,
  selectFlightsSearchParams,
} from './flights.selector';

@Injectable({
  providedIn: 'root',
})
export class FlightsFacade {
  flights$ = this.store.select(selectFlights);
  flightsIsLoading$ = this.store.select(selectFlightsIsLoading);
  flightsSearchParams$ = this.store.select(selectFlightsSearchParams);
  flightsError$ = this.store.select(selectFlightsError);
  flightDetailsId$ = this.store.select(selectDetailsFlightId);

  constructor(private store: Store) {}

  fetchFlights(searchParams: IFlightsSearchParams) {
    this.store.dispatch(
      FLIGHTS_ACTIONS.FetchFlights({
        searchParams,
      })
    );
  }
}
