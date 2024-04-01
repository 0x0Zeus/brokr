import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RatingComponent } from '@components/shared/rating';
import { IStay } from '@shared/stays/models/stay';

@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './stay.component.html',
  styleUrl: './stay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StayComponent {
  @Input({ required: true }) stay!: IStay;
  isFavorite = true;
}
