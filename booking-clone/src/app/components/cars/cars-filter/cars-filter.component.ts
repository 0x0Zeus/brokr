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
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { DestroyDirective } from '@core/directives';
import { CarsService } from '@core/services/cars';
import { ToasterService } from '@core/services/toaster';
import { ICarsFilterForm } from '@shared/models/cars';
import { ICarsDestination } from '@shared/models/cars';
import {
  getNowDate,
  getTomorrowDate,
  parseDate,
  parseTime,
} from '@shared/utils';
import { ValidateCarsDateRange } from '@shared/validators';
import { CarsFacade } from '@store/cars';
import { CalendarModule } from 'primeng/calendar';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-cars-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    MiniLoaderComponent,
    CalendarModule,
  ],
  templateUrl: './cars-filter.component.html',
  styleUrl: './cars-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class CarsFilterComponent implements OnInit {
  isLocationFocus = false;
  elasticLocationValues$ = new BehaviorSubject<ICarsDestination[]>([]);
  destinationIsLoading$ = new BehaviorSubject<boolean>(false);
  chosenLocation: null | ICarsDestination = null;
  nowDate = getNowDate();
  tomorrowDate = getTomorrowDate();
  private destroy$ = inject(DestroyDirective).destroy$;

  carsFilterForm = new FormGroup<ICarsFilterForm>(
    {
      fromDate: new FormControl<Date>(this.nowDate, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      fromTime: new FormControl<Date>(this.nowDate, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      untilDate: new FormControl<Date>(this.tomorrowDate, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      untilTime: new FormControl<Date>(this.nowDate, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      locationValue: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: [ValidateCarsDateRange] }
  );

  constructor(
    private carsService: CarsService,
    private carsFacade: CarsFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.carsFilterForm.controls.locationValue.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged(),
        filter((query) => query !== ''),
        switchMap(() => {
          this.destinationIsLoading$.next(true);
          return this.carsService
            .getDestinations({
              query: this.locationValue.value,
            })
            .pipe(
              catchError((error: HttpErrorResponse) => {
                this.destinationIsLoading$.next(false);
                this.toasterService.showHttpsError(error);
                return of();
              })
            );
        })
      )
      .subscribe((locationsValues) => {
        this.destinationIsLoading$.next(false);
        this.elasticLocationValues$.next(locationsValues);
      });
  }

  onFocus(): void {
    this.isLocationFocus = true;
  }

  onBlur(): void {
    this.isLocationFocus = false;
  }

  onSearch(): void {
    if (this.carsFilterForm.valid && this.chosenLocation) {
      const carsFormData = this.carsFilterForm.getRawValue();
      this.carsFacade.fetchCars({
        fromDate: parseDate(carsFormData.fromDate),
        untilDate: parseDate(carsFormData.untilDate),
        fromTime: parseTime(carsFormData.fromTime),
        untilTime: parseTime(carsFormData.untilTime),
        latitude: this.chosenLocation!.latitude,
        longitude: this.chosenLocation!.longitude,
      });
    }
  }

  elasticSearch(destination: ICarsDestination): void {
    this.locationValue.setValue(destination.location);
    this.chosenLocation = destination;
  }

  get fromDate(): FormControl<Date> {
    return this.carsFilterForm.controls.fromDate;
  }

  get fromTime(): FormControl<Date> {
    return this.carsFilterForm.controls.fromTime;
  }

  get untilDate(): FormControl<Date> {
    return this.carsFilterForm.controls.untilDate;
  }

  get untilTime(): FormControl<Date> {
    return this.carsFilterForm.controls.untilTime;
  }

  get locationValue(): FormControl<string> {
    return this.carsFilterForm.controls.locationValue;
  }
}
