import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAttractionsSearchParams } from '@shared/interfaces/attractions';

import * as ATTRACTIONS_ACTIONS from './attractions.action';
import {
  selectAttractions,
  selectAttractionsError,
  selectAttractionsIsLoading,
  selectAttractionsSearchParams,
  selectDetailsAttractionId,
} from './attractions.selector';

@Injectable({
  providedIn: 'root',
})
export class AttractionsFacade {
  attractions$ = this.store.select(selectAttractions);
  attractionsIsLoading$ = this.store.select(selectAttractionsIsLoading);
  attractionsSearchParams$ = this.store.select(selectAttractionsSearchParams);
  attractionsError$ = this.store.select(selectAttractionsError);
  attractionDetailsId$ = this.store.select(selectDetailsAttractionId);

  constructor(private store: Store) {}

  fetchAttractions(searchParams: IAttractionsSearchParams) {
    this.store.dispatch(
      ATTRACTIONS_ACTIONS.FetchAttractions({
        searchParams,
      })
    );
  }
}
