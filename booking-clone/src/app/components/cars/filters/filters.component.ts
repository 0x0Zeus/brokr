import { AsyncPipe } from '@angular/common';
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
import { DestroyDirective } from '@core/deirectives/destroy.directive';
import { CarsService } from '@core/services/cars.service';
import { ICarsFilterForm } from '@shared/cars/models/carsFilter';
import { ICarsDestination } from '@shared/cars/models/destination';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class FiltersComponent implements OnInit {
  isLocationFocus = false;
  elasticLocationValues = new BehaviorSubject<ICarsDestination[]>([]);
  private destroy$ = inject(DestroyDirective).destroy$;

  carsFilterForm = new FormGroup<ICarsFilterForm>({
    fromDate: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    fromTime: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    untilDate: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    untilTime: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  locationValue = new FormControl<string>('', {
    nonNullable: true,
  });

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.locationValue.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        this.carsService
          .getDestinations({ query: this.locationValue.value })
          .pipe(takeUntil(this.destroy$))
          .subscribe((locationsValues) => {
            console.log(locationsValues);
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
    // this.booksFacade.fetchBooks({
    //   searchValue: this.searchValue.value,
    //   filterType: this.filterType.getValue(),
    //   categoryFilterType: this.filterCategory,
    //   page: 0,
    // });
    // if (this.router.url !== '/search') {
    //   this.router.navigateByUrl('search');
    // }
  }

  elasticSearch(destination: ICarsDestination): void {
    this.locationValue.setValue(destination.location);
    this.onSearch();
  }

  get fromDate() {
    return this.carsFilterForm.controls.fromDate;
  }

  get fromTime() {
    return this.carsFilterForm.controls.fromTime;
  }

  get untilDate() {
    return this.carsFilterForm.controls.fromDate;
  }

  get untilTime() {
    return this.carsFilterForm.controls.fromTime;
  }
}
