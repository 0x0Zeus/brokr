import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightsService } from '@core/services/flights';
import { ToasterService } from '@core/services/toaster';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as FLIGHTS_ACTIONS from './flights.action';

@Injectable()
export class FlightsEffects {
  constructor(
    private actions$: Actions,
    private flightsService: FlightsService,
    private toasterService: ToasterService
  ) {}

  fetchFlights$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FLIGHTS_ACTIONS.FetchFlights),
      switchMap(({ searchParams, filters }) =>
        this.flightsService.getFlights(searchParams, filters).pipe(
          map((flights) => FLIGHTS_ACTIONS.FetchFlightsSuccess({ flights })),
          catchError((error: HttpErrorResponse) => {
            this.toasterService.showHttpsError(error);
            return of(
              FLIGHTS_ACTIONS.FetchFlightsFailed({
                error: error,
              })
            );
          })
        )
      )
    );
  });
}
