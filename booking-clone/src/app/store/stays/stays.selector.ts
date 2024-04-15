import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from '@store/router/router.selectors';

import { StaysState } from './stays.reducer';

export const selectStaysStore = createFeatureSelector<StaysState>('stays');

export const selectStays = createSelector(
  selectStaysStore,
  (state: StaysState) => state.stays
);

export const selectStaysError = createSelector(
  selectStaysStore,
  (state: StaysState) => state.error
);

export const selectStaysIsLoading = createSelector(
  selectStaysStore,
  (state: StaysState) => state.isLoading
);

export const selectStaysSearchParams = createSelector(
  selectStaysStore,
  (state: StaysState) => state.searchParams
);

export const selectStaysFilters = createSelector(
  selectStaysStore,
  (state: StaysState) => state.filters
);

export const selectDetailsStayId = createSelector(
  selectRouteParams,
  ({ stayId }) => {
    return stayId as string;
  }
);
