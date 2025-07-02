import { Injectable } from '@angular/core';
import { AttractionsFilterComponent } from '@components/attractions/attractions-filter';
import { CarsFilterComponent } from '@components/cars/cars-filter';
import { FlightsFilterComponent } from '@components/flights/flights-filter';
import { StaysFilterComponent } from '@components/stays/stays-filter';
import { IFilterItem, PagesEnum } from '@shared/interfaces/filters';

@Injectable({ providedIn: 'root' })
export class FiltersService {
  getFilter() {
    return [
      {
        component: CarsFilterComponent,
        route: PagesEnum.CARS,
      },
      {
        component: StaysFilterComponent,
        route: PagesEnum.STAYS,
      },
      {
        component: AttractionsFilterComponent,
        route: PagesEnum.ATTRACTIONS,
      },
      {
        component: FlightsFilterComponent,
        route: PagesEnum.FLIGHTS,
      },
    ] as IFilterItem[];
  }
}
