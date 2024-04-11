import { FormControl } from '@angular/forms';

export interface IFlightsFilterForm {
  departureDate: FormControl<Date>;
  locationFromValue: FormControl<string>;
  locationToValue: FormControl<string>;
}
