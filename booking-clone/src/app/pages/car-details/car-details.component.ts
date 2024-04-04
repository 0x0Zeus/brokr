import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetailsComponent {}
