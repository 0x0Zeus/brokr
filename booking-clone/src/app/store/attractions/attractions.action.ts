import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IAttractionsSearchParams } from '@shared/interfaces/attractions';
import { IAttraction } from '@shared/models/attractions';

const actionSource = '[Attractions]';

export const FetchAttractions = createAction(
  `${actionSource} Fetch`,
  props<{
    searchParams: IAttractionsSearchParams;
  }>()
);

export const FetchAttractionsSuccess = createAction(
  `${actionSource} Fetch Success`,
  props<{ attractions: IAttraction[] }>()
);

export const FetchAttractionsFailed = createAction(
  `${actionSource} Fetch Failed`,
  props<{ error: HttpErrorResponse }>()
);
