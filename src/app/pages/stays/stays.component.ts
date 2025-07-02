import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { StayComponent } from '@components/stays/stay';
import { DestroyDirective } from '@core/directives';
import {
  IStaysSearchFilters,
  IStaysSearchParams,
} from '@shared/interfaces/stays';
import { MapFacade } from '@store/map';
import { StaysFacade } from '@store/stays';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BehaviorSubject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [StayComponent, AsyncPipe, ProgressSpinnerModule, PaginatorModule],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysComponent implements OnInit {
  stays$ = this.staysFacade.stays$;
  isLoadingStays$ = this.staysFacade.staysIsLoading$;
  staysSearchParams: null | IStaysSearchParams = null;
  filters: IStaysSearchFilters = {
    adults: null,
    rooms: null,
    priceMin: null,
    priceMax: null,
    sortBy: null,
  };
  totalCount = new BehaviorSubject<number>(0);
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private staysFacade: StaysFacade,
    private mapFacade: MapFacade
  ) {}

  ngOnInit(): void {
    this.staysFacade.staysSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.staysSearchParams = searchParams;
      });

    this.stays$
      .pipe(
        takeUntil(this.destroy$),
        map((stays) =>
          stays.map((stay) => ({
            latitude: stay.latitude,
            longitude: stay.longitude,
            label: `${stay.name}, ${stay.price}$`,
            detailsLink: `/details/stay/${stay.id}_${stay.checkInDate}_${stay.checkOutDate}`,
          }))
        )
      )
      .subscribe((mapData) => {
        this.mapFacade.addMapData(mapData);
      });

    this.staysFacade.staysSearchFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => {
        this.filters = filters;
      });

    this.staysFacade.staysTotalCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((totalCount) => {
        this.totalCount.next(totalCount);
      });
  }

  setNextPage(pageState: PaginatorState): void {
    if (this.staysSearchParams && pageState.page !== undefined) {
      this.staysFacade.fetchStays(
        {
          ...this.staysSearchParams,
          page: pageState.page + 1,
        },
        this.filters
      );
    }
  }
}
