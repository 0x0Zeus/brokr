import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { DestroyDirective } from '@core/directives';
import { CarsService } from '@core/services/cars';
import { ToasterService } from '@core/services/toaster';
import { ICarDetailsParams } from '@shared/interfaces/cars';
import { ICarReview } from '@shared/models/cars';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject, catchError, of, takeUntil } from 'rxjs';

import { CarReviewComponent } from '../car-review';

@Component({
  selector: 'app-car-reviews',
  standalone: true,
  imports: [
    CarReviewComponent,
    AsyncPipe,
    ProgressSpinnerModule,
    MiniLoaderComponent,
  ],
  templateUrl: './car-reviews.component.html',
  styleUrl: './car-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarReviewsComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  @Input({ required: true }) params!: ICarDetailsParams;
  reviews$ = new BehaviorSubject<ICarReview[]>([]);
  isReviewsLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private carsService: CarsService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isReviewsLoading$.next(true);
    this.carsService
      .getCarReviews({
        vehicleId: this.params.vehicleId,
        searchKey: this.params.searchKey,
      })
      .pipe(
        takeUntil(this.destroy$),
        catchError((error: HttpErrorResponse) => {
          this.isReviewsLoading$.next(false);
          this.toasterService.showHttpsError(error);
          return of();
        })
      )
      .subscribe((reviewsInfo) => {
        this.isReviewsLoading$.next(false);
        this.reviews$.next(reviewsInfo);
      });
  }
}
