import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input({ required: true }) luggage!: IFlightLuggage;
}
