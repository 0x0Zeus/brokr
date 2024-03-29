import { FormControl } from '@angular/forms';

export interface ICarsFilterForm {
  fromDate: FormControl<string>;
  fromTime: FormControl<string>;
  untilDate: FormControl<string>;
  untilTime: FormControl<string>;
}
