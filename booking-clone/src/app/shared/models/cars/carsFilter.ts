import { FormControl } from '@angular/forms';

export interface ICarsFilterForm {
  fromDate: FormControl<Date>;
  fromTime: FormControl<Date>;
  untilDate: FormControl<Date>;
  untilTime: FormControl<Date>;
  locationValue: FormControl<string>;
}
