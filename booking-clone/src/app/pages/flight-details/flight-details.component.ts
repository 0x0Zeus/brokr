import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DestroyDirective } from '@core/directives';
import { FlightsService } from '@core/services/flights';
import { ToasterService } from '@core/services/toaster';
import { IFlightDetails } from '@shared/models/flights';
import { FlightsFacade } from '@store/flights';
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
  selector: 'app-flight-details',
  standalone: true,
  imports: [AsyncPipe, ProgressSpinnerModule],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class FlightDetailsComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  flightInfo$ = new BehaviorSubject<IFlightDetails | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private flightsFacade: FlightsFacade,
    private flightsService: FlightsService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.isLoading$.next(true);
    this.flightsFacade.flightDetailsId$
      .pipe(
        takeUntil(this.destroy$),
        filter((flightId) => flightId !== undefined),
        switchMap((flightId) => {
          return this.flightsService
            .getFlightDetails({
              flightId,
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
      .subscribe((flightInfo) => {
        this.flightInfo$.next(flightInfo);
        this.isLoading$.next(false);
      });
  }
}
