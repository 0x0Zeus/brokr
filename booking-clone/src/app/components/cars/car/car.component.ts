import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '@components/shared/rating';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent {
  isFavorite = false;
}
