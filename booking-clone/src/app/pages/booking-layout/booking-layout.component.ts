import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltersComponent } from '@components/cars/filters';
import { NavigationComponent } from '@components/core/navigation';

@Component({
  selector: 'app-booking-layout',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, FiltersComponent],
  templateUrl: './booking-layout.component.html',
  styleUrl: './booking-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingLayoutComponent {}
