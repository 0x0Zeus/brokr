import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CarsFilterComponent } from '@components/cars/cars-filter';
import { NavigationComponent } from '@components/core/navigation';
import { StaysFilterComponent } from '@components/stays/stays-filter';
import { DestroyDirective } from '@core/directives';
import { BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-booking-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    CarsFilterComponent,
    StaysFilterComponent,
    AsyncPipe,
  ],
  templateUrl: './booking-layout.component.html',
  styleUrl: './booking-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class BookingLayoutComponent implements OnInit {
  private destroy$ = inject(DestroyDirective).destroy$;
  currentRoute = new BehaviorSubject<string>(this.router.url);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute.next(event.url);
      }
    });
  }
}
