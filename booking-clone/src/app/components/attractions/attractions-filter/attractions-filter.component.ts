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
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { ModalComponent } from '@components/shared/modal';
import { DestroyDirective } from '@core/directives';
import { AttractionsService } from '@core/services/attractions';
import { ToasterService } from '@core/services/toaster';
import { IAttractionsSearchFilters } from '@shared/interfaces/attractions';
import { IAttractionsDestination } from '@shared/models/attractions';
import { AttractionsFacade } from '@store/attractions';
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

import { AttractionsFilterModalComponent } from '../attractions-filter-modal';

@Component({
  selector: 'app-attractions-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    MiniLoaderComponent,
    CalendarModule,
    FormsModule,
    ModalComponent,
    AttractionsFilterModalComponent,
  ],
  templateUrl: './attractions-filter.component.html',
  styleUrl: './attractions-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class AttractionsFilterComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  isLocationFocus = false;
  destinationIsLoading$ = new BehaviorSubject<boolean>(false);
  elasticLocationValues$ = new BehaviorSubject<IAttractionsDestination[]>([]);
  chosenLocation: null | IAttractionsDestination = null;
  isFiltersModalOpen = false;
  nowDate = new Date(Date.now());
  filters: IAttractionsSearchFilters = {
    sortBy: null,
  };
  locationValue = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  constructor(
    private attractionsService: AttractionsService,
    private attractionsFacade: AttractionsFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.locationValue.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(() => {
          this.destinationIsLoading$.next(true);
          return this.attractionsService
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

    this.attractionsFacade.attractionsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.filters = filters;
      });
  }

  onFocus(): void {
    this.isLocationFocus = true;
  }

  onBlur(): void {
    this.isLocationFocus = false;
  }

  onSearch(): void {
    if (this.chosenLocation) {
      this.attractionsFacade.fetchAttractions(
        {
          attractionId: this.chosenLocation.attractionId,
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

  elasticSearch(destination: IAttractionsDestination): void {
    this.locationValue.setValue(destination.location);
    this.chosenLocation = destination;
  }
}
