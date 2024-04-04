import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '@components/shared/rating';
import { ICar } from '@shared/models/cars/car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RatingComponent, RouterLink],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent {
  @Input({ required: true }) car!: ICar;
  isFavorite = false;
}
