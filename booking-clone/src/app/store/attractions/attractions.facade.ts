import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IAttractionsSearchFilters,
  IAttractionsSearchParams,
} from '@shared/interfaces/attractions';

import * as ATTRACTIONS_ACTIONS from './attractions.action';
import {
  selectAttractions,
  selectAttractionsError,
  selectAttractionsFilters,
  selectAttractionsIsLoading,
  selectAttractionsSearchParams,
  selectAttractionsTotalCount,
  selectDetailsAttractionId,
} from './attractions.selector';

@Injectable({
  providedIn: 'root',
})
export class AttractionsFacade {
  attractions$ = this.store.select(selectAttractions);
  attractionsIsLoading$ = this.store.select(selectAttractionsIsLoading);
  attractionsSearchParams$ = this.store.select(selectAttractionsSearchParams);
  attractionsSearchFilters$ = this.store.select(selectAttractionsFilters);
  attractionsTotalCount$ = this.store.select(selectAttractionsTotalCount);
  attractionsError$ = this.store.select(selectAttractionsError);
  attractionDetailsId$ = this.store.select(selectDetailsAttractionId);

  constructor(private store: Store) {}

  fetchAttractions(
    searchParams: IAttractionsSearchParams,
    filters: IAttractionsSearchFilters
  ) {
    this.store.dispatch(
      ATTRACTIONS_ACTIONS.FetchAttractions({
        searchParams,
        filters,
      })
    );
  }

  setAttractionsFilters(filters: IAttractionsSearchFilters) {
    this.store.dispatch(
      ATTRACTIONS_ACTIONS.SetAttractionsFilters({
        filters,
      })
    );
  }
}
