import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from '@store/router/router.selectors';

import { AttractionsState } from './attractions.reducer';

export const selectAttractionsStore =
  createFeatureSelector<AttractionsState>('attractions');

export const selectAttractions = createSelector(
  selectAttractionsStore,
  (state: AttractionsState) => state.attractions
);

export const selectAttractionsError = createSelector(
  selectAttractionsStore,
  (state: AttractionsState) => state.error
);

export const selectAttractionsIsLoading = createSelector(
  selectAttractionsStore,
  (state: AttractionsState) => state.isLoading
);

export const selectAttractionsSearchParams = createSelector(
  selectAttractionsStore,
  (state: AttractionsState) => state.searchParams
);

export const selectAttractionsFilters = createSelector(
  selectAttractionsStore,
  (state: AttractionsState) => state.filters
);

export const selectDetailsAttractionId = createSelector(
  selectRouteParams,
  ({ attractionId }) => {
    return attractionId as string;
  }
);
