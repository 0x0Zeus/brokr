import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DestroyDirective } from '@core/directives';
import { IStaysModalFilterForm } from '@shared/models/stays';
import { StaysFacade } from '@store/stays';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { takeUntil } from 'rxjs';

import { sortTypes } from './constants';

@Component({
  selector: 'app-stays-filter-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputNumberModule,
    FormsModule,
    DropdownModule,
  ],
  templateUrl: './stays-filter-modal.component.html',
  styleUrl: './stays-filter-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysFilterModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  sortTypes = sortTypes;
  private destroy$ = inject(DestroyDirective).destroy$;
  staysModalFilterForm = new FormGroup<IStaysModalFilterForm>({
    adults: new FormControl<number | null>(null),
    rooms: new FormControl<number | null>(null),
    priceMin: new FormControl<number | null>(null),
    priceMax: new FormControl<number | null>(null),
    sortBy: new FormControl<string | null>(null),
  });

  constructor(private staysFacade: StaysFacade) {}

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
    this.closeModal.emit(false);
  }
}
