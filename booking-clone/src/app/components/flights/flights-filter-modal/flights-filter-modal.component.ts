import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DestroyDirective } from '@core/directives';
import { ToasterService } from '@core/services/toaster';
import { IFlightsModalFilterForm } from '@shared/models/flights';
import { FlightsFacade } from '@store/flights';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { takeUntil } from 'rxjs';

import { flightsSortCabinTypes, flightsSortTypes } from './constants';

@Component({
  selector: 'app-flights-filter-modal',
  standalone: true,
  imports: [ReactiveFormsModule, InputNumberModule, DropdownModule],
  templateUrl: './flights-filter-modal.component.html',
  styleUrl: './flights-filter-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class FlightsFilterModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  flightsSortTypes = flightsSortTypes;
  flightsSortCabinTypes = flightsSortCabinTypes;
  private destroy$ = inject(DestroyDirective).destroy$;
  flightsModalFilterForm = new FormGroup<IFlightsModalFilterForm>({
    adults: new FormControl<number | null>(null),
    sortBy: new FormControl<string | null>(null),
    cabinClass: new FormControl<string | null>(null),
  });

  constructor(
    private flightsFacade: FlightsFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.flightsFacade.flightsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.flightsModalFilterForm.setValue(filters);
      });
  }

  get adults(): FormControl<number | null> {
    return this.flightsModalFilterForm.controls.adults;
  }

  get sortBy(): FormControl<string | null> {
    return this.flightsModalFilterForm.controls.sortBy;
  }

  get cabinClass(): FormControl<string | null> {
    return this.flightsModalFilterForm.controls.cabinClass;
  }

  applyFilters(): void {
    const filtersFormData = this.flightsModalFilterForm.getRawValue();
    this.flightsFacade.setFlightsFilters(filtersFormData);
    this.toasterService.show({
      type: 'success',
      title: 'Flights filters',
      message: 'Filters applied!',
    });
    this.closeModal.emit(false);
  }

  clearForm(): void {
    this.flightsModalFilterForm.reset();
    this.flightsFacade.setFlightsFilters({
      adults: null,
      cabinClass: null,
      sortBy: null,
    });
  }
}
