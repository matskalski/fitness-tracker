import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value;

        if(!value){
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        //nie A-Z, nie a-z, nie 0-9
        const hasSpecialCharacter = /[^A-Za-z 0-9]+/.test(value);

        const isPasswordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter;

        return !isPasswordValid ? {passwordIsNotStrongEnough: true} : null
    }
}