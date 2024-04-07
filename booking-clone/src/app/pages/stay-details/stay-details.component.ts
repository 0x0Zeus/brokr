import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from '@components/shared/rating';
import { ReviewComponent } from '@components/shared/review';
import { SpecificationsComponent } from '@components/stays/specifications';
import { DestroyDirective } from '@core/directives';
import { ToasterService } from '@core/services/toaster';
import { IStayReview } from '@shared/models/stays/review';
import { IStayDetails } from '@shared/models/stays/stayDetails';
import { StaysFacade } from '@store/stays';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {
  BehaviorSubject,
  catchError,
  filter,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';

import { StaysService } from '../../core/services/stays/stays.service';

@Component({
  selector: 'app-stay-details',
  standalone: true,
  imports: [
    RatingComponent,
    AsyncPipe,
    ReviewComponent,
    CalendarModule,
    ReactiveFormsModule,
    SpecificationsComponent,
    ProgressSpinnerModule,
  ],
  templateUrl: './stay-details.component.html',
  styleUrl: './stay-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StayDetailsComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  stayInfo$ = new BehaviorSubject<IStayDetails | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(false);
  reviews$ = new BehaviorSubject<IStayReview[]>([]);
  currentPhotoUrl = new BehaviorSubject<string | null>(null);
  dateRange = new FormGroup({
    date: new FormControl<[Date, Date]>([
      new Date(Date.now()),
      new Date(Date.now()),
    ]),
  });

  constructor(
    private staysFacade: StaysFacade,
    private staysService: StaysService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isLoading$.next(true);
    this.staysFacade.stayPreviewId$
      .pipe(
        takeUntil(this.destroy$),
        filter((stayId) => stayId !== undefined),
        switchMap((stayId) => {
          const stayIdInfo = stayId.split('_');
          this.dateRange.setValue({
            date: [new Date(stayIdInfo[1]), new Date(stayIdInfo[2])],
          });
          return this.staysService
            .getStayDetails({
              hotelId: stayIdInfo[0],
              arrivalDate: stayIdInfo[1],
              departureDate: stayIdInfo[2],
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
      .subscribe((stayInfo) => {
        this.stayInfo$.next(stayInfo);
        this.isLoading$.next(false);
      });

    //will optimize

    this.staysFacade.stayPreviewId$
      .pipe(
        takeUntil(this.destroy$),
        filter((stayId) => stayId !== undefined),
        switchMap((stayId) => {
          const stayIdInfo = stayId.split('_');
          return this.staysService
            .getStayReviews({
              hotelId: stayIdInfo[0],
            })
            .pipe(
              catchError((error: HttpErrorResponse) => {
                this.toasterService.showHttpsError(error);
                return of();
              })
            );
        })
      )
      .subscribe((reviewsInfo) => {
        this.reviews$.next(reviewsInfo);
      });
  }

  setCurrentPhotoUrl(url: string): void {
    this.currentPhotoUrl.next(url);
  }
}
