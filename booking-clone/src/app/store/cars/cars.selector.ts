import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarsState } from './cars.reducer';

export const selectCarsStore = createFeatureSelector<CarsState>('cars');

export const selectCars = createSelector(
  selectCarsStore,
  (state: CarsState) => state.cars
);

export const selectCarsError = createSelector(
  selectCarsStore,
  (state: CarsState) => state.error
);

export const selectCarsIsLoading = createSelector(
  selectCarsStore,
  (state: CarsState) => state.isLoading
);
