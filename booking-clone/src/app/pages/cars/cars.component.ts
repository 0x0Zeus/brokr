import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CarComponent } from '@components/cars/car';
import { LoaderComponent } from '@components/shared/loader';
import { DestroyDirective } from '@core/directives';
import { CarsFacade } from '@store/cars';
import { MapFacade } from '@store/map';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent, AsyncPipe, LoaderComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class CarsComponent implements OnInit {
  cars$ = this.carsFacade.paginatedCars$;
  isLoadingCars$ = this.carsFacade.carsIsLoading$;
  private destroy$ = inject(DestroyDirective).destroy$;
  page = 1;

  constructor(
    private carsFacade: CarsFacade,
    private mapFacade: MapFacade
  ) {}

  ngOnInit(): void {
    this.cars$.pipe(takeUntil(this.destroy$)).subscribe((cars) => {
      const mapData = cars.map((car) => ({
        latitude: car.latitude,
        longitude: car.longitude,
        label: `${car.location}, ${car.price}$`,
      }));
      this.mapFacade.addMapData(mapData);
    });

    this.carsFacade.carsPage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => {
        this.page = page;
      });
  }

  getCars(): void {}

  setNextPage(): void {
    this.carsFacade.setCarsPage(this.page + 1);
  }
}
