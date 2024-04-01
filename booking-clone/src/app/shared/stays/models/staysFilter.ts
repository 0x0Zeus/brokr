import { FormControl } from '@angular/forms';

export interface IStaysFilterForm {
  arrivalDate: FormControl<string>;
  departureDate: FormControl<string>;
}
