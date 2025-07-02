import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '@components/shared/rating';
import { IFlight } from '@shared/models/flights';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [RouterLink, RatingComponent],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightComponent {
  flight = input.required<IFlight>();
}
