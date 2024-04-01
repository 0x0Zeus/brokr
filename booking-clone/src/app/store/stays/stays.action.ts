import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IStaysSearchParams } from '@shared/stays/models/params';
import { IStay } from '@shared/stays/models/stay';

const actionSource = '[Stays]';

export const FetchStays = createAction(
  `${actionSource} Fetch`,
  props<{
    searchParams: IStaysSearchParams;
  }>()
);

export const FetchStaysSuccess = createAction(
  `${actionSource} Fetch Success`,
  props<{ stays: IStay[] }>()
);

export const FetchStaysFailed = createAction(
  `${actionSource} Fetch Failed`,
  props<{ error: HttpErrorResponse }>()
);
