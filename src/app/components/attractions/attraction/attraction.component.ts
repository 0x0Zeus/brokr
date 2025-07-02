import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '@components/shared/rating';
import { IAttraction } from '@shared/models/attractions';

@Component({
  selector: 'app-attraction',
  standalone: true,
  imports: [UpperCasePipe, RatingComponent, RouterLink],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionComponent {
  attraction = input.required<IAttraction>();
}
