import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { ICar } from '@shared/cars/models/car';

import * as CARS_ACTIONS from './cars.action';

export interface CarsState {
  cars: ICar[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: CarsState = {
  cars: [],
  isLoading: false,
  error: null,
};

export const carsReducer = createReducer(
  initialState,
  on(
    CARS_ACTIONS.FetchCars,
    (state): CarsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(CARS_ACTIONS.FetchCarsSuccess, (state, { cars }): CarsState => {
    return {
      ...state,
      cars,
      isLoading: false,
    };
  }),
  on(
    CARS_ACTIONS.FetchCarsFailed,
    (state, { error }): CarsState => ({
      ...state,
      error,
      cars: [],
      isLoading: false,
    })
  )
);
