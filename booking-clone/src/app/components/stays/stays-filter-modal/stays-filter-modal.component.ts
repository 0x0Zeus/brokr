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
import { IStaysModalFilterForm } from '@shared/models/stays';
import { StaysFacade } from '@store/stays';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { takeUntil } from 'rxjs';

import { staysSortTypes } from './constants';

@Component({
  selector: 'app-stays-filter-modal',
  standalone: true,
  imports: [ReactiveFormsModule, InputNumberModule, DropdownModule],
  templateUrl: './stays-filter-modal.component.html',
  styleUrl: './stays-filter-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysFilterModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  staysSortTypes = staysSortTypes;
  private destroy$ = inject(DestroyDirective).destroy$;
  staysModalFilterForm = new FormGroup<IStaysModalFilterForm>({
    adults: new FormControl<number | null>(null),
    rooms: new FormControl<number | null>(null),
    priceMin: new FormControl<number | null>(null),
    priceMax: new FormControl<number | null>(null),
    sortBy: new FormControl<string | null>(null),
  });

  constructor(
    private staysFacade: StaysFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.staysFacade.staysSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.staysModalFilterForm.setValue(filters);
      });
  }

  get adults(): FormControl<number | null> {
    return this.staysModalFilterForm.controls.adults;
  }

  get rooms(): FormControl<number | null> {
    return this.staysModalFilterForm.controls.rooms;
  }
  get priceMin(): FormControl<number | null> {
    return this.staysModalFilterForm.controls.priceMin;
  }
  get priceMax(): FormControl<number | null> {
    return this.staysModalFilterForm.controls.priceMax;
  }
  get sortBy(): FormControl<string | null> {
    return this.staysModalFilterForm.controls.sortBy;
  }

  applyFilters(): void {
    const filtersFormData = this.staysModalFilterForm.getRawValue();
    this.staysFacade.setStaysFilters(filtersFormData);
    this.toasterService.show({
      type: 'success',
      title: 'Stays filters',
      message: 'Filters applied!',
    });
    this.closeModal.emit(false);
  }

  clearForm(): void {
    this.staysModalFilterForm.reset();
    this.staysFacade.setStaysFilters({
      adults: null,
      rooms: null,
      priceMin: null,
      priceMax: null,
      sortBy: null,
    });
  }
}
