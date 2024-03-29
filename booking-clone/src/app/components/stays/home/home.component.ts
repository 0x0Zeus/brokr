import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '@components/shared/rating';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  isFavorite = true;
}
