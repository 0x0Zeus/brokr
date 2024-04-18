import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IFlightLuggage } from '@shared/models/flights';

@Component({
  selector: 'app-flight-luggage',
  standalone: true,
  imports: [],
  templateUrl: './flight-luggage.component.html',
  styleUrl: './flight-luggage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightLuggageComponent {
  luggage = input.required<IFlightLuggage>();
}
