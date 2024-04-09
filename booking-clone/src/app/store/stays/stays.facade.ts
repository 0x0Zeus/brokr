import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStaysSearchParams } from '@shared/interfaces/stays/params';

import * as STAYS_ACTIONS from './stays.action';
import {
  selectDetailsStayId,
  selectStays,
  selectStaysError,
  selectStaysIsLoading,
  selectStaysSearchParams,
} from './stays.selector';

@Injectable({
  providedIn: 'root',
})
export class StaysFacade {
  stays$ = this.store.select(selectStays);
  staysIsLoading$ = this.store.select(selectStaysIsLoading);
  staysSearchParams$ = this.store.select(selectStaysSearchParams);
  staysError$ = this.store.select(selectStaysError);
  stayDetailsId$ = this.store.select(selectDetailsStayId);

  constructor(private store: Store) {}

  fetchStays(searchParams: IStaysSearchParams) {
    this.store.dispatch(
      STAYS_ACTIONS.FetchStays({
        searchParams,
      })
    );
  }
}
