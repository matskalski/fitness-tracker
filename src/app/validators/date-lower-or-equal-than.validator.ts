import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import moment from "moment";

export function dateLowerOrEqualThanValidator(baseDate: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const controlDate = value.toDate();

        const isValid = controlDate <= baseDate

        return isValid ? null : {userIsToYoung: true};

    }
}