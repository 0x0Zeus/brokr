import { FormControl } from '@angular/forms';

export interface IFlightsFilterForm {
  arrivalDate: FormControl<Date>;
  departureDate: FormControl<Date>;
}
