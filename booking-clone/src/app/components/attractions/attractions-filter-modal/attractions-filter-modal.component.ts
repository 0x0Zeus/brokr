import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DestroyDirective } from '@core/directives';
import { ToasterService } from '@core/services/toaster';
import { AttractionsFacade } from '@store/attractions';
import { DropdownModule } from 'primeng/dropdown';
import { takeUntil } from 'rxjs';

import { attractionsSortTypes } from './constants';

@Component({
  selector: 'app-attractions-filter-modal',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule],
  templateUrl: './attractions-filter-modal.component.html',
  styleUrl: './attractions-filter-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionsFilterModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  attractionsSortTypes = attractionsSortTypes;
  private destroy$ = inject(DestroyDirective).destroy$;
  sortBy = new FormControl<string | null>(null);

  constructor(
    private attractionsFacade: AttractionsFacade,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {
    this.attractionsFacade.attractionsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.sortBy.setValue(filters.sortBy);
      });
  }

  applyFilters(): void {
    this.attractionsFacade.setAttractionsFilters({ sortBy: this.sortBy.value });
    this.toasterService.show({
      type: 'success',
      title: 'Attractions filters',
      message: 'Filters applied!',
    });
    this.closeModal.emit(false);
  }

  clearForm(): void {
    this.sortBy.reset();
    this.attractionsFacade.setAttractionsFilters({
      sortBy: null,
    });
  }
}
