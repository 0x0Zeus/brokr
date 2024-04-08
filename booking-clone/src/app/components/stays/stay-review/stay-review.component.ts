import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStayReview } from '@shared/models/stays/review';

import { RatingComponent } from '../../shared/rating';

@Component({
  selector: 'app-stay-review',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './stay-review.component.html',
  styleUrl: './stay-review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StayReviewComponent {
  @Input({ required: true }) review!: IStayReview;
}
