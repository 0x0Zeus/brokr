import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AttractionComponent } from '@components/attractions/attraction';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { DestroyDirective } from '@core/directives';
import {
  IAttractionsSearchFilters,
  IAttractionsSearchParams,
} from '@shared/interfaces/attractions';
import { AttractionsFacade } from '@store/attractions';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [
    AttractionComponent,
    ProgressSpinnerModule,
    AsyncPipe,
    MiniLoaderComponent,
    PaginatorModule,
  ],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class AttractionsComponent implements OnInit {
  attractions$ = this.attractionsFacade.attractions$;
  isLoadingAttractions$ = this.attractionsFacade.attractionsIsLoading$;
  attractionsSearchParams$ = this.attractionsFacade.attractionsSearchParams$;
  totalCount = new BehaviorSubject<number>(0);
  attractionsSearchParams: null | IAttractionsSearchParams = null;
  filters: IAttractionsSearchFilters = {
    sortBy: null,
  };
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(private attractionsFacade: AttractionsFacade) {}

  ngOnInit(): void {
    this.attractionsSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.attractionsSearchParams = searchParams;
      });

    this.attractionsFacade.attractionsSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.filters = filters;
      });

    this.attractionsFacade.attractionsTotalCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((totalCount) => {
        this.totalCount.next(totalCount);
      });
  }

  setNextPage(pageState: PaginatorState): void {
    console.log([].length);
    if (this.attractionsSearchParams && pageState.page !== undefined) {
      this.attractionsFacade.fetchAttractions(
        {
          ...this.attractionsSearchParams,
          page: pageState.page + 1,
        },
        this.filters
      );
    }
  }
}
