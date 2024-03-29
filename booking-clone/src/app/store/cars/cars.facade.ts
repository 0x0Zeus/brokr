import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICarsSearchParams } from '@shared/cars/interfaces/params';

import * as CARS_ACTIONS from './cars.action';
import {
  selectCars,
  selectCarsError,
  selectCarsIsLoading,
} from './cars.selector';

@Injectable({
  providedIn: 'root',
})
export class CarsFacade {
  cars$ = this.store.select(selectCars);
  carsIsLoading$ = this.store.select(selectCarsIsLoading);
  carsError$ = this.store.select(selectCarsError);

  constructor(private store: Store) {}

  fetchCars(searchParams: ICarsSearchParams) {
    this.store.dispatch(
      CARS_ACTIONS.FetchCars({
        searchParams,
      })
    );
  }
}
