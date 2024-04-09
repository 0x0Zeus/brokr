import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStayReview } from '@shared/models/stays';

import { RatingComponent } from '../rating';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  @Input({ required: true }) review!: IStayReview;
}
