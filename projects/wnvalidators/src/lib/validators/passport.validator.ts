import { AbstractControl } from "@angular/forms";

export function ValidatorsPassport(
    control: AbstractControl
): { [key: string]: any } | null {

    let result: boolean = false;

    if (control.value == null || control.value.length !== 9 ) {
        result = false;
    }else{
        result = true;
    }

  
    return !result ? { error: { invalidPassportID: true } } : null;
}