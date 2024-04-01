import { createFeatureSelector, createSelector } from '@ngrx/store';

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
