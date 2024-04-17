import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CarComponent } from '@components/cars/car';
import { DestroyDirective } from '@core/directives';
import { CarsFacade } from '@store/cars';
import { MapFacade } from '@store/map';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent, AsyncPipe, ProgressSpinnerModule, PaginatorModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class CarsComponent implements OnInit {
  cars$ = this.carsFacade.paginatedCars$;
  isLoadingCars$ = this.carsFacade.carsIsLoading$;
  totalCount = new BehaviorSubject<number>(0);
  page = 0;
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private carsFacade: CarsFacade,
    private mapFacade: MapFacade
  ) {}

  ngOnInit(): void {
    this.cars$.pipe(takeUntil(this.destroy$)).subscribe((cars) => {
      const mapData = cars.map((car) => ({
        latitude: car.latitude,
        longitude: car.longitude,
        label: `${car.supplier}, ${car.price}$`,
      }));
      this.mapFacade.addMapData(mapData);
    });

    this.carsFacade.carsPage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => {
        this.page = page;
      });

    this.carsFacade.carsTotalCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((totalCount) => {
        this.totalCount.next(totalCount);
      });
  }

  setNextPage(pageState: PaginatorState): void {
    if (pageState.page !== undefined) {
      this.carsFacade.setCarsPage(pageState.page);
    }
  }
}
