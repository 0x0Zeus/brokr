import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RecommendedBooksState } from './cars.reducer';

export const selectRecommendedBooksStore =
  createFeatureSelector<RecommendedBooksState>('recommendedBooks');

export const selectRecommendedBooks = createSelector(
  selectRecommendedBooksStore,
  (state: RecommendedBooksState) => state.books
);

export const selectRecommendedBooksError = createSelector(
  selectRecommendedBooksStore,
  (state: RecommendedBooksState) => state.error
);

export const selectRecommendedBooksIsLoading = createSelector(
  selectRecommendedBooksStore,
  (state: RecommendedBooksState) => state.isLoading
);
