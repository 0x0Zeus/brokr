import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { ICar } from '@shared/models/cars';

import * as CARS_ACTIONS from './cars.action';

export interface CarsState {
  cars: ICar[];
  paginatedCars: ICar[];
  isLoading: boolean;
  page: number;
  error: HttpErrorResponse | null;
}

export const initialState: CarsState = {
  cars: [],
  paginatedCars: [],
  isLoading: false,
  page: 1,
  error: null,
};

export const carsReducer = createReducer(
  initialState,
  on(
    CARS_ACTIONS.FetchCars,
    (state): CarsState => ({
      ...state,
      cars: [],
      paginatedCars: [],
      isLoading: true,
    })
  ),
  on(CARS_ACTIONS.FetchCarsSuccess, (state, { cars }): CarsState => {
    return {
      ...state,
      cars,
      paginatedCars: [...cars.slice(0, 20)],
      isLoading: false,
    };
  }),
  on(
    CARS_ACTIONS.FetchCarsFailed,
    (state, { error }): CarsState => ({
      ...state,
      error,
      cars: [],
      paginatedCars: [],
      isLoading: false,
    })
  ),
  on(
    CARS_ACTIONS.SetCarsPage,
    (state, { page }): CarsState => ({
      ...state,
      paginatedCars: [...state.cars.slice(0, 20 * page)],
      page,
    })
  )
);
