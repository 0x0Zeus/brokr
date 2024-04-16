import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttractionsService } from '@core/services/attractions';
import { ToasterService } from '@core/services/toaster';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as ATTRACTIONS_ACTIONS from './attractions.action';

@Injectable()
export class AttractionsEffects {
  constructor(
    private actions$: Actions,
    private attractionsService: AttractionsService,
    private toasterService: ToasterService
  ) {}

  fetchAttractions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ATTRACTIONS_ACTIONS.FetchAttractions),
      switchMap(({ searchParams, filters }) =>
        this.attractionsService.getAttractions(searchParams, filters).pipe(
          map((attractions) =>
            ATTRACTIONS_ACTIONS.FetchAttractionsSuccess({ attractions })
          ),
          catchError((error: HttpErrorResponse) => {
            this.toasterService.showHttpsError(error);
            return of(
              ATTRACTIONS_ACTIONS.FetchAttractionsFailed({
                error: error,
              })
            );
          })
        )
      )
    );
  });
}
