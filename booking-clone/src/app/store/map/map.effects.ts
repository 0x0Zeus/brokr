import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaysService } from '@core/services/stays';
import { ToasterService } from '@core/services/toaster';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as STAYS_ACTIONS from './map.action';

@Injectable()
export class StaysEffects {
  constructor(
    private actions$: Actions,
    private staysService: StaysService,
    private toasterService: ToasterService
  ) {}

  fetchStays$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(STAYS_ACTIONS.FetchStays),
      switchMap(({ searchParams }) =>
        this.staysService.getStays(searchParams).pipe(
          map((stays) => STAYS_ACTIONS.FetchStaysSuccess({ stays })),
          catchError((error: HttpErrorResponse) => {
            this.toasterService.showHttpsError(error);
            return of(
              STAYS_ACTIONS.FetchStaysFailed({
                error: error,
              })
            );
          })
        )
      )
    );
  });
}
