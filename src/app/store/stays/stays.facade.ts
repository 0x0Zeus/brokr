import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IStaysSearchFilters,
  IStaysSearchParams,
} from '@shared/interfaces/stays';

import * as STAYS_ACTIONS from './stays.action';
import {
  selectDetailsStayId,
  selectStays,
  selectStaysError,
  selectStaysFilters,
  selectStaysIsLoading,
  selectStaysSearchParams,
  selectStaysTotalCount,
} from './stays.selector';

@Injectable({
  providedIn: 'root',
})
export class StaysFacade {
  stays$ = this.store.select(selectStays);
  staysIsLoading$ = this.store.select(selectStaysIsLoading);
  staysSearchParams$ = this.store.select(selectStaysSearchParams);
  staysSearchFilters$ = this.store.select(selectStaysFilters);
  staysTotalCount$ = this.store.select(selectStaysTotalCount);
  staysError$ = this.store.select(selectStaysError);
  stayDetailsId$ = this.store.select(selectDetailsStayId);

  constructor(private store: Store) {}

  fetchStays(searchParams: IStaysSearchParams, filters: IStaysSearchFilters) {
    this.store.dispatch(
      STAYS_ACTIONS.FetchStays({
        searchParams,
        filters,
      })
    );
  }

  setStaysFilters(filters: IStaysSearchFilters) {
    this.store.dispatch(
      STAYS_ACTIONS.SetStaysFilters({
        filters,
      })
    );
  }
}
