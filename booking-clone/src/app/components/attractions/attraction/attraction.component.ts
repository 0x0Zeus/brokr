import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '@components/shared/rating';

@Component({
  selector: 'app-attraction',
  standalone: true,
  imports: [UpperCasePipe, RatingComponent],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionComponent {
  isFavorite = false;
}
