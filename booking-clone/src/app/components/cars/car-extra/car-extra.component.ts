import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICarExtraDetails } from '@shared/models/cars';

@Component({
  selector: 'app-car-extra',
  standalone: true,
  imports: [],
  templateUrl: './car-extra.component.html',
  styleUrl: './car-extra.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarExtraComponent {
  @Input({ required: true }) extra!: ICarExtraDetails;
}
