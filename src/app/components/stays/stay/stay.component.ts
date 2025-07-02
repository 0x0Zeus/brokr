import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '@components/shared/rating';
import { IStay } from '@shared/models/stays';

@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [RatingComponent, RouterLink],
  templateUrl: './stay.component.html',
  styleUrl: './stay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StayComponent {
  stay = input.required<IStay>();
}
