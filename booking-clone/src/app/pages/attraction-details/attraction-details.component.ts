import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RatingComponent } from '@components/shared/rating';
import { ReviewComponent } from '@components/shared/review';
import { DestroyDirective } from '@core/directives';
import { AttractionsService } from '@core/services/attractions';
import { ToasterService } from '@core/services/toaster';
import { IAttractionDetails } from '@shared/models/attractions';
import { AttractionsFacade } from '@store/attractions';
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
  selector: 'app-attraction-details',
  standalone: true,
  imports: [AsyncPipe, ProgressSpinnerModule, RatingComponent, ReviewComponent],
  templateUrl: './attraction-details.component.html',
  styleUrl: './attraction-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class AttractionDetailsComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  attractionInfo$ = new BehaviorSubject<IAttractionDetails | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(false);
  currentPhotoUrl = new BehaviorSubject<string | null>(null);

  constructor(
    private attractionsFacade: AttractionsFacade,
    private attractionsService: AttractionsService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isLoading$.next(true);
    this.attractionsFacade.attractionDetailsId$
      .pipe(
        takeUntil(this.destroy$),
        filter((attractionId) => attractionId !== undefined),
        switchMap((attractionId) => {
          return this.attractionsService
            .getAttractionDetails({
              attractionId,
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
      .subscribe((attractionInfo) => {
        this.attractionInfo$.next(attractionInfo);
        this.isLoading$.next(false);
      });
  }

  setCurrentPhotoUrl(url: string): void {
    this.currentPhotoUrl.next(url);
  }
}
