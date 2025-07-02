import { Type } from '@angular/core';

export enum PagesEnum {
  CARS = '/booking/cars',
  STAYS = '/booking/stays',
  FLIGHTS = '/booking/flights',
  ATTRACTIONS = '/booking/attractions',
}

export interface IFilterItem {
  component: Type<unknown>;
  route: string;
}
