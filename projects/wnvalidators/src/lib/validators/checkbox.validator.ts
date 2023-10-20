import { AbstractControl } from "@angular/forms";

export function CheckBoxValidator(
    control: AbstractControl
): { [key: string]: any } | null {
    if (control.value != true || control.value=='' ) { 
        return { invalidCheckbox: true };
    }
    return null;
}