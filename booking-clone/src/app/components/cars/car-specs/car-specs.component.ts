import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input({ required: true }) specifications!: ICarDetailsSpec[];
}
