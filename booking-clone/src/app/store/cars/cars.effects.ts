import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarsService } from '@core/services/cars';
import { ToasterService } from '@core/services/toaster';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as CARS_ACTIONS from './cars.action';

@Injectable()
export class CarsEffects {
  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private toasterService: ToasterService
  ) {}

  fetchCars$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CARS_ACTIONS.FetchCars),
      switchMap(({ searchParams }) =>
        this.carsService.getCars(searchParams).pipe(
          map((carsInfo) => CARS_ACTIONS.FetchCarsSuccess(carsInfo)),
          catchError((error: HttpErrorResponse) => {
            this.toasterService.showHttpsError(error);
            return of(
              CARS_ACTIONS.FetchCarsFailed({
                error: error,
              })
            );
          })
        )
      )
    );
  });
}
