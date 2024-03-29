import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarsService } from '@core/services/cars.service';
import { ToasterService } from '@core/services/toaster';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as CARS_ACTIONS from './cars.action';

@Injectable()
export class CarsEffects {
  constructor(
    private actions$: Actions,
    private carsService: CarsService
    // private toasterService: ToasterService
  ) {}

  fetchRecommendedBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CARS_ACTIONS.FetchCars),
      switchMap(({ searchValue }) =>
        this.searchService.getRecBooks(searchValue).pipe(
          map((cars) => CARS_ACTIONS.FetchCarsSuccess({ cars })),
          catchError((error: HttpErrorResponse) => {
            // this.toasterService.showHttpsError(error);
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
