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
import { ReviewComponent } from '@components/shared/review';
import { DestroyDirective } from '@core/directives';
import { StaysService } from '@core/services/stays';
import { ToasterService } from '@core/services/toaster';
import { IStayReview } from '@shared/models/stays';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject, catchError, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stay-reviews',
  standalone: true,
  imports: [
    ReviewComponent,
    AsyncPipe,
    ProgressSpinnerModule,
    MiniLoaderComponent,
  ],
  templateUrl: './stay-reviews.component.html',
  styleUrl: './stay-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StayReviewsComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  @Input({ required: true }) stayId!: number;
  reviewsPage = 1;
  reviews$ = new BehaviorSubject<IStayReview[]>([]);
  reviews: IStayReview[] = [];
  isReviewsLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private staysService: StaysService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isReviewsLoading$.next(true);
    this.staysService
      .getStayReviews({
        hotelId: String(this.stayId),
        page: 1,
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
        this.reviews = reviewsInfo;
      });
  }

  getNextReviewsPage(): void {
    this.isReviewsLoading$.next(true);
    this.staysService
      .getStayReviews({
        hotelId: String(this.stayId),
        page: this.reviewsPage + 1,
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
        this.reviews$.next([...this.reviews.concat(reviewsInfo)]);
        this.reviewsPage += 1;
      });
  }
}
