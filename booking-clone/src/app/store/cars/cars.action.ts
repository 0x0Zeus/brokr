import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IBook } from '../../shared/models/book';

const actionSource = '[Cars]';

export const FetchCars = createAction(
  `${actionSource} Fetch`,
  props<{
    searchValue: string;
  }>()
);

export const FetchCarsSuccess = createAction(
  `${actionSource} Fetch Success`,
  props<{ books: IBook[] }>()
);

export const FetchCarsFailed = createAction(
  `${actionSource} Fetch Failed`,
  props<{ error: HttpErrorResponse }>()
);
