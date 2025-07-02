import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AttractionsFilterComponent } from '@components/attractions/attractions-filter';
import { CarsFilterComponent } from '@components/cars/cars-filter';
import { NavigationComponent } from '@components/core/navigation';
import { FlightsFilterComponent } from '@components/flights/flights-filter';
import { MapComponent } from '@components/shared/map';
import { StaysFilterComponent } from '@components/stays/stays-filter';
import { DestroyDirective } from '@core/directives';
import { FiltersService } from '@core/services/filters';
import { IFilterItem, PagesEnum } from '@shared/interfaces/filters';
import { MapFacade } from '@store/map';
import { BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-booking-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    CarsFilterComponent,
    StaysFilterComponent,
    AttractionsFilterComponent,
    FlightsFilterComponent,
    AsyncPipe,
    MapComponent,
    NgComponentOutlet,
  ],
  templateUrl: './booking-layout.component.html',
  styleUrl: './booking-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class BookingLayoutComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  currentRoute = new BehaviorSubject<string>(this.router.url);
  isMap$ = this.mapFacade.isMap$;
  Pages = PagesEnum;
  private filtersList = inject(FiltersService).getFilter();

  constructor(
    private router: Router,
    private mapFacade: MapFacade
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute.next(event.url);
      }
    });
  }

  get currentFilter(): IFilterItem | null {
    const filter = this.filtersList.find(
      (comp) => comp.route === this.currentRoute.getValue()
    );
    return filter ?? null;
  }
}
