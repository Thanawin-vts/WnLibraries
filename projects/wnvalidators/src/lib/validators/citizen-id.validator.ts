import { AbstractControl } from "@angular/forms";

export function ValidatorsCitizenId(
    control: AbstractControl
): { [key: string]: any } | null {

    let result: boolean = false;

    if (control.value == null || control.value.length !== 13 || !/^[0-9]\d+$/.test(control.value)) {
        result = false;
    }

    let i,
        sum = 0;
    for (i = 0, sum = 0; i < 12; i++) {
        sum += parseInt(control.value.charAt(i)) * (13 - i);
    }

    let check = (11 - (sum % 11)) % 10;
    if (check === parseInt(control.value.charAt(12))) {
        result = true;
    } else {
        result = false;
    }

    return !result ? { error: { invalidCitizenID: true } } : null;
}