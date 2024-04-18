import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '@components/shared/rating';
import { ICar } from '@shared/models/cars';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RatingComponent, RouterLink],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent {
  car = input.required<ICar>();
}
