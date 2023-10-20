import { AbstractControl } from "@angular/forms";

export function ValidatorsTaxId(
    control: AbstractControl
): { [key: string]: any } | null {

    let result: boolean = false;
    let pattern = /[0-9]/g;
    let patternCheck = control.value.match(pattern);

    if ((control.value.length == 10 && patternCheck?.length == 10) || (control.value.length == 13 && patternCheck?.length == 13)) {
        result = true;
    }

    return !result ? { error: { invalidTaxID: true } } : null;
}