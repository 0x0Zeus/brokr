import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FlightComponent } from '@components/flights/flight';
import { DestroyDirective } from '@core/directives';
import {
  IFlightsSearchFilters,
  IFlightsSearchParams,
} from '@shared/interfaces/flights';
import { FlightsFacade } from '@store/flights';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [AsyncPipe, FlightComponent, ProgressSpinnerModule, PaginatorModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsComponent implements OnInit {
  flights$ = this.flightsFacade.flights$;
  isLoadingFlights$ = this.flightsFacade.flightsIsLoading$;
  flightsSearchParams: null | IFlightsSearchParams = null;
  totalCount = new BehaviorSubject<number>(0);
  private destroy$ = inject(DestroyDirective).destroy$;
  filters: IFlightsSearchFilters = {
    adults: null,
    cabinClass: null,
    sortBy: null,
  };

  constructor(private flightsFacade: FlightsFacade) {}

  ngOnInit(): void {
    this.flightsFacade.flightsSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.flightsSearchParams = searchParams;
      });

    this.flightsFacade.flightsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.filters = filters;
      });

    this.flightsFacade.flightsTotalCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((totalCount) => {
        this.totalCount.next(totalCount);
      });
  }

  setNextPage(pageState: PaginatorState): void {
    if (this.flightsSearchParams && pageState.page !== undefined) {
      this.flightsFacade.fetchFlights(
        {
          ...this.flightsSearchParams,
          page: pageState.page + 1,
        },
        this.filters
      );
    }
  }
}
