import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAttractionReview } from '@shared/models/attractions/attractionDetails';

import { RatingComponent } from '../../shared/rating';

@Component({
  selector: 'app-attraction-review',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './attraction-review.component.html',
  styleUrl: './attraction-review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionReviewComponent {
  @Input({ required: true }) review!: IAttractionReview;
}
