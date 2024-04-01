import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStaysSearchParams } from '@shared/stays/models/params';

import * as STAYS_ACTIONS from './stays.action';
import {
  selectStays,
  selectStaysError,
  selectStaysIsLoading,
} from './stays.selector';

@Injectable({
  providedIn: 'root',
})
export class StaysFacade {
  stays$ = this.store.select(selectStays);
  staysIsLoading$ = this.store.select(selectStaysIsLoading);
  staysError$ = this.store.select(selectStaysError);

  constructor(private store: Store) {}

  fetchStays(searchParams: IStaysSearchParams) {
    this.store.dispatch(
      STAYS_ACTIONS.FetchStays({
        searchParams,
      })
    );
  }
}
