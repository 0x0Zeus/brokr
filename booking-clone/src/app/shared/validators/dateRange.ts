import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ValidateStaysDateRange: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const arrivalDate = Date.parse(control.value.arrivalDate);
  const departureDate = Date.parse(control.value.departureDate);

  return control.value.departureDate.getDate() -
    control.value.arrivalDate.getDate() >=
    1 && departureDate > arrivalDate
    ? null
    : { dateRangeError: true };
};

export const ValidateCarsDateRange: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const fromDate = Date.parse(control.value.fromDate);
  const untilDate = Date.parse(control.value.untilDate);

  return control.value.untilDate.getDate() - control.value.fromDate.getDate() >=
    1 && untilDate > fromDate
    ? null
    : { dateRangeError: true };
};
