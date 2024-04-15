import { FormControl } from '@angular/forms';

export interface IFlightsFilterForm {
  departureDate: FormControl<Date>;
  locationFromValue: FormControl<string>;
  locationToValue: FormControl<string>;
}

export interface IFlightsModalFilterForm {
  adults: FormControl<number | null>;
  sortBy: FormControl<string | null>;
  cabinClass: FormControl<string | null>;
}
