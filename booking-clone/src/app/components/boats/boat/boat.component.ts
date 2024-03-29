import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '@components/shared/rating';

@Component({
  selector: 'app-boat',
  standalone: true,
  imports: [UpperCasePipe, RatingComponent],
  templateUrl: './boat.component.html',
  styleUrl: './boat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoatComponent {
  isFavorite = false;
}
