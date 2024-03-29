import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarComponent } from '@components/cars/car';
import { LoaderComponent } from '@components/shared/loader';
import { CarsFacade } from '@store/cars';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent, AsyncPipe, LoaderComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsComponent {
  cars$ = this.carsFacade.cars$;
  isLoadingCars$ = this.carsFacade.carsIsLoading$;

  constructor(private carsFacade: CarsFacade) {}
}
