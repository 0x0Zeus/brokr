import { FormControl } from '@angular/forms';

export interface ICarsFilterForm {
  fromDate: FormControl<Date>;
  fromTime: FormControl<string>;
  untilDate: FormControl<Date>;
  untilTime: FormControl<string>;
}
