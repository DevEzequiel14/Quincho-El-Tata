import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const PHONE_PATTERN = /^[+]?[\d\s()-]{8,20}$/;

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value as string)?.trim();
    if (!value) {
      return null;
    }
    return PHONE_PATTERN.test(value) ? null : { phone: true };
  };
}
