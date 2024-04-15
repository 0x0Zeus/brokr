import { FormControl } from '@angular/forms';

export interface IStaysFilterForm {
  arrivalDate: FormControl<Date>;
  departureDate: FormControl<Date>;
  locationValue: FormControl<string>;
}

export interface IStaysModalFilterForm {
  adults: FormControl<number | null>;
  rooms: FormControl<number | null>;
  priceMin: FormControl<number | null>;
  priceMax: FormControl<number | null>;
}
