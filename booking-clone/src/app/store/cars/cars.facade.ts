import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICarsSearchParams } from '@shared/interfaces/cars';

import * as CARS_ACTIONS from './cars.action';
import {
  selectCarsError,
  selectCarsIsLoading,
  selectCarsPage,
  selectDetailsCarId,
  selectPaginatedCars,
} from './cars.selector';

@Injectable({
  providedIn: 'root',
})
export class CarsFacade {
  paginatedCars$ = this.store.select(selectPaginatedCars);
  carsIsLoading$ = this.store.select(selectCarsIsLoading);
  carsError$ = this.store.select(selectCarsError);
  carsPage$ = this.store.select(selectCarsPage);
  carDetailsId$ = this.store.select(selectDetailsCarId);

  constructor(private store: Store) {}

  fetchCars(searchParams: ICarsSearchParams) {
    this.store.dispatch(
      CARS_ACTIONS.FetchCars({
        searchParams,
      })
    );
  }

  setCarsPage(page: number) {
    this.store.dispatch(
      CARS_ACTIONS.SetCarsPage({
        page,
      })
    );
  }
}
