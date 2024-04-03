import { FormControl } from '@angular/forms';

export interface IStaysFilterForm {
  arrivalDate: FormControl<Date>;
  departureDate: FormControl<Date>;
}
