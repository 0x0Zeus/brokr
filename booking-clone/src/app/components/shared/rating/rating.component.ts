import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  rating = input.required<number>();

  ratingItems = [...Array(5).keys()];
}
