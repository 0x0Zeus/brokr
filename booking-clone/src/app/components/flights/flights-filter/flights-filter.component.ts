import { AsyncPipe, NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { ModalComponent } from '@components/shared/modal';
import { DestroyDirective } from '@core/directives';
import { FlightsService } from '@core/services/flights';
import { ToasterService } from '@core/services/toaster';
import { IFlightsSearchFilters } from '@shared/interfaces/flights';
import {
  IFlightsDestination,
  IFlightsFilterForm,
} from '@shared/models/flights';
import { parseDate } from '@shared/utils';
import { FlightsFacade } from '@store/flights';
import { CalendarModule } from 'primeng/calendar';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';

import { FlightsFilterModalComponent } from '../flights-filter-modal';

@Component({
  selector: 'app-flights-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    MiniLoaderComponent,
    CalendarModule,
    FormsModule,
    FlightsFilterModalComponent,
    ModalComponent,
  ],
  templateUrl: './flights-filter.component.html',
  styleUrl: './flights-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class FlightsFilterComponent implements OnInit {
  isLocationFromFocus = false;
  destinationFromIsLoading$ = new BehaviorSubject<boolean>(false);
  elasticLocationFromValues$ = new BehaviorSubject<IFlightsDestination[]>([]);
  chosenLocationFrom: null | IFlightsDestination = null;
  isLocationToFocus = false;
  destinationToIsLoading$ = new BehaviorSubject<boolean>(false);
  elasticLocationToValues$ = new BehaviorSubject<IFlightsDestination[]>([]);
  chosenLocationTo: null | IFlightsDestination = null;
  isFiltersModalOpen = false;
  nowDate = new Date(Date.now());
  filters: IFlightsSearchFilters = {
    adults: null,
    cabinClass: null,
    sortBy: null,
  };
  private destroy$ = inject(DestroyDirective).destroy$;

  flightsFilterForm = new FormGroup<IFlightsFilterForm>({
    departureDate: new FormControl<Date>(this.nowDate, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    locationFromValue: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    locationToValue: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private flightsService: FlightsService,
    private flightsFacade: FlightsFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.flightsFilterForm.controls.locationFromValue.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(() => {
          this.destinationFromIsLoading$.next(true);
          return this.flightsService
            .getDestinations({ query: this.locationFromValue.value })
            .pipe(
              catchError((error: HttpErrorResponse) => {
                this.destinationFromIsLoading$.next(false);
                this.toasterService.showHttpsError(error);
                return of();
              })
            );
        })
      )
      .subscribe((locationsValues) => {
        this.destinationFromIsLoading$.next(false);
        this.elasticLocationFromValues$.next(locationsValues);
      });

    this.flightsFilterForm.controls.locationToValue.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(() => {
          this.destinationToIsLoading$.next(true);
          return this.flightsService
            .getDestinations({ query: this.locationToValue.value })
            .pipe(
              catchError((error: HttpErrorResponse) => {
                this.destinationToIsLoading$.next(false);
                this.toasterService.showHttpsError(error);
                return of();
              })
            );
        })
      )
      .subscribe((locationsValues) => {
        this.destinationToIsLoading$.next(false);
        this.elasticLocationToValues$.next(locationsValues);
      });

    this.flightsFacade.flightsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.filters = filters;
      });
  }

  onFocus(type: string): void {
    if (type === 'from') {
      this.isLocationFromFocus = true;
    } else if (type === 'to') {
      this.isLocationToFocus = true;
    }
  }

  onBlur(type: string): void {
    if (type === 'from') {
      this.isLocationFromFocus = false;
    } else if (type === 'to') {
      this.isLocationToFocus = false;
    }
  }

  onSearch(): void {
    if (
      this.flightsFilterForm.valid &&
      this.chosenLocationFrom &&
      this.chosenLocationTo
    ) {
      const flightsFormData = this.flightsFilterForm.getRawValue();

      this.flightsFacade.fetchFlights(
        {
          fromId: this.chosenLocationFrom.destId,
          toId: this.chosenLocationTo.destId,
          departureDate: parseDate(flightsFormData.departureDate),
          page: 1,
        },
        this.filters
      );
    }
  }

  closeModal(): void {
    this.isFiltersModalOpen = false;
  }

  openModal(): void {
    this.isFiltersModalOpen = true;
  }

  elasticSearch(destination: IFlightsDestination, type: string): void {
    if (type === 'from') {
      this.locationFromValue.setValue(destination.location);
      this.chosenLocationFrom = destination;
    } else if (type === 'to') {
      this.locationToValue.setValue(destination.location);
      this.chosenLocationTo = destination;
    }
  }

  get departureDate(): FormControl<Date> {
    return this.flightsFilterForm.controls.departureDate;
  }

  get locationFromValue(): FormControl<string> {
    return this.flightsFilterForm.controls.locationFromValue;
  }

  get locationToValue(): FormControl<string> {
    return this.flightsFilterForm.controls.locationToValue;
  }
}
