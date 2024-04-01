import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsFilterComponent } from '@components/cars/cars-filter';
import { NavigationComponent } from '@components/core/navigation';
import { StaysFilterComponent } from '@components/stays/stays-filter';

@Component({
  selector: 'app-booking-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    CarsFilterComponent,
    StaysFilterComponent,
  ],
  templateUrl: './booking-layout.component.html',
  styleUrl: './booking-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingLayoutComponent {}
