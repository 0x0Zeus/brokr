import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ICarDetailsSpec } from '@shared/models/cars';

@Component({
  selector: 'app-car-specs',
  standalone: true,
  imports: [],
  templateUrl: './car-specs.component.html',
  styleUrl: './car-specs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarSpecsComponent {
  specifications = input.required<ICarDetailsSpec[]>();
}
