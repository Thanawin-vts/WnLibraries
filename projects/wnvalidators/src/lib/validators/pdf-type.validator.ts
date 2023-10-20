import { AbstractControl } from "@angular/forms";

export function ValidatorsPDFType(
  control: AbstractControl
): { [key: string]: any } | null {
  let data = control.value;
  let contentType;
  if (data) {
    contentType = data[0].type;;
  }
  const result = contentType ? contentType == 'application/pdf' : true;

  return !result ? { error: { invalidPDFType: true } } : null;
}
