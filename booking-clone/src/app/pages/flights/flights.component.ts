import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FlightComponent } from '@components/flights/flight';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { DestroyDirective } from '@core/directives';
import {
  IFlightsSearchFilters,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import { FlightsFacade } from '@store/flights';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [
    AsyncPipe,
    FlightComponent,
    ProgressSpinnerModule,
    MiniLoaderComponent,
  ],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsComponent implements OnInit {
  flights$ = this.flightsFacade.flights$;
  isLoadingFlights$ = this.flightsFacade.flightsIsLoading$;
  flightsSearchParams$ = this.flightsFacade.flightsSearchParams$;
  flightsSearchParams: null | IFlightsSearchParams = null;
  private destroy$ = inject(DestroyDirective).destroy$;
  filters: IFlightsSearchFilters = {
    adults: null,
    cabinClass: null,
    sortBy: null,
  };

  constructor(private flightsFacade: FlightsFacade) {}

  ngOnInit(): void {
    this.flightsSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.flightsSearchParams = searchParams;
      });

    this.flightsFacade.flightsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.filters = filters;
      });
  }

  setNextPage(): void {
    if (this.flightsSearchParams) {
      this.flightsFacade.fetchFlights(
        {
          ...this.flightsSearchParams,
          page: this.flightsSearchParams.page + 1,
        },
        this.filters
      );
    }
  }
}
