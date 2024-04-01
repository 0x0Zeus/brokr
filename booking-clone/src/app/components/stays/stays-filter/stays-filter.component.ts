import { AsyncPipe, NgClass } from '@angular/common';
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
import { DestroyDirective } from '@core/directives';
import { StaysService } from '@core/services/stays';
import { IStaysDestination } from '@shared/stays/models/destination';
import { IStaysFilterForm } from '@shared/stays/models/staysFilter';
import { StaysFacade } from '@store/stays';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-stays-filter',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgClass],
  templateUrl: './stays-filter.component.html',
  styleUrl: './stays-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysFilterComponent implements OnInit {
  isLocationFocus = false;
  elasticLocationValues = new BehaviorSubject<IStaysDestination[]>([]);
  chosenLocation: null | IStaysDestination = null;
  private destroy$ = inject(DestroyDirective).destroy$;

  staysFilterForm = new FormGroup<IStaysFilterForm>({
    arrivalDate: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    departureDate: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  locationValue = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  constructor(
    private staysService: StaysService,
    private staysFacade: StaysFacade
  ) {}

  ngOnInit(): void {
    this.locationValue.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        this.staysService
          .getDestinations({ query: this.locationValue.value })
          .pipe(takeUntil(this.destroy$))
          .subscribe((locationsValues) => {
            this.elasticLocationValues.next(locationsValues);
          });
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
        ...staysFormData,
        destId: this.chosenLocation.destId,
        searchType: this.chosenLocation.searchType,
      });
    }
  }

  elasticSearch(destination: IStaysDestination): void {
    this.locationValue.setValue(destination.location);
    this.chosenLocation = destination;
  }

  get arrivalDate() {
    return this.staysFilterForm.controls.arrivalDate;
  }

  get departureDate() {
    return this.staysFilterForm.controls.departureDate;
  }
}
