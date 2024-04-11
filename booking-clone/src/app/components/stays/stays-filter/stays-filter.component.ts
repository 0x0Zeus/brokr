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
import { DestroyDirective } from '@core/directives';
import { StaysService } from '@core/services/stays';
import { ToasterService } from '@core/services/toaster';
import { IStaysDestination } from '@shared/models/stays';
import { IStaysFilterForm } from '@shared/models/stays';
import { parseDate } from '@shared/utils';
import { StaysFacade } from '@store/stays';
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

@Component({
  selector: 'app-stays-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    MiniLoaderComponent,
    CalendarModule,
    FormsModule,
  ],
  templateUrl: './stays-filter.component.html',
  styleUrl: './stays-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysFilterComponent implements OnInit {
  isLocationFocus = false;
  destinationIsLoading$ = new BehaviorSubject<boolean>(false);
  elasticLocationValues$ = new BehaviorSubject<IStaysDestination[]>([]);
  chosenLocation: null | IStaysDestination = null;
  nowDate = new Date(Date.now());
  private destroy$ = inject(DestroyDirective).destroy$;

  staysFilterForm = new FormGroup<IStaysFilterForm>({
    arrivalDate: new FormControl<Date>(this.nowDate, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    departureDate: new FormControl<Date>(this.nowDate, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    locationValue: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private staysService: StaysService,
    private staysFacade: StaysFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.staysFilterForm.controls.locationValue.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(() => {
          this.destinationIsLoading$.next(true);
          return this.staysService
            .getDestinations({ query: this.locationValue.value })
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
    if (this.staysFilterForm.valid && this.chosenLocation) {
      const staysFormData = this.staysFilterForm.getRawValue();

      this.staysFacade.fetchStays({
        arrivalDate: parseDate(staysFormData.arrivalDate),
        departureDate: parseDate(staysFormData.departureDate),
        destId: this.chosenLocation.destId,
        searchType: this.chosenLocation.searchType,
        page: 1,
      });
    }
  }

  elasticSearch(destination: IStaysDestination): void {
    this.locationValue.setValue(destination.location);
    this.chosenLocation = destination;
  }

  get arrivalDate(): FormControl<Date> {
    return this.staysFilterForm.controls.arrivalDate;
  }

  get locationValue(): FormControl<string> {
    return this.staysFilterForm.controls.locationValue;
  }

  get departureDate(): FormControl<Date> {
    return this.staysFilterForm.controls.departureDate;
  }
}
