import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CarReviewsComponent } from '@components/cars/car-reviews';
import { CarSpecsComponent } from '@components/cars/car-specs';
import { RatingComponent } from '@components/shared/rating';
import { DestroyDirective } from '@core/directives';
import { CarsService } from '@core/services/cars';
import { ToasterService } from '@core/services/toaster';
import { ICarDetailsParams } from '@shared/interfaces/cars';
import { ICarDetails } from '@shared/models/cars';
import { CarsFacade } from '@store/cars';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {
  BehaviorSubject,
  catchError,
  filter,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    AsyncPipe,
    RatingComponent,
    CarSpecsComponent,
    ProgressSpinnerModule,
    CarReviewsComponent,
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class CarDetailsComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  carInfo$ = new BehaviorSubject<ICarDetails | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(false);
  reviewParams$ = new BehaviorSubject<ICarDetailsParams | null>(null);

  constructor(
    private carsFacade: CarsFacade,
    private carsService: CarsService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isLoading$.next(true);
    this.carsFacade.carDetailsId$
      .pipe(
        takeUntil(this.destroy$),
        filter((carId) => carId !== undefined),
        switchMap((carId) => {
          const carIdInfo = carId.split('_');
          this.reviewParams$.next({
            vehicleId: carIdInfo[0],
            searchKey: carIdInfo[1],
          });

          return this.carsService
            .getCarDetails({
              vehicleId: carIdInfo[0],
              searchKey: carIdInfo[1],
            })
            .pipe(
              catchError((error: HttpErrorResponse) => {
                this.isLoading$.next(false);
                this.toasterService.showHttpsError(error);
                return of();
              })
            );
        })
      )
      .subscribe((carInfo) => {
        this.carInfo$.next(carInfo);
        this.isLoading$.next(false);
      });
  }
}
