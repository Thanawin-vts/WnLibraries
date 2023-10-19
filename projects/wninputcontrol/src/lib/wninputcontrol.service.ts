import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WninputcontrolService {

  constructor() { }

  clearValidatorControl(formgroup: any, arrControl: string[], ignorControl?: string | string[]) {
    arrControl.map((ele) => {
      if(ignorControl?.includes(ele)) {

      } else {
        formgroup.get(ele)?.clearValidators();
      }
    });
    return formgroup;
  }

  resetControl(formgroup: any, arrControl: string[], ignorControl?: string | string[]) {
    arrControl.map((ele) => {
      if(ignorControl?.includes(ele)) {

      } else {
      formgroup.get(ele)?.reset();
      }
    });
    return formgroup;
  }

  enableControl(formgroup: any, arrControl: string[], ignorControl?: string | string[]) {
    arrControl.map((ele) => {
      if(ignorControl?.includes(ele)) {

      } else {
      formgroup.get(ele)?.enable();
      }
    });
    return formgroup;
  }

  disableControl(formgroup: any, arrControl: string[], ignorControl?: string | string[]) {
    arrControl.map((ele) => {
      if(ignorControl?.includes(ele)) {

      } else {
      formgroup.get(ele)?.disable();
      }
    });
    return formgroup;
  }
}
