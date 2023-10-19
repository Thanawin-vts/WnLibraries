import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[English]',
})
export class EnglishDirective {
  constructor() {}

  @Input('specialChar') params: string = '';
  @Output() validater = new EventEmitter();
  regEx = new RegExp(/^[a-zA-Z().-\s]*$/);
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    const e = <KeyboardEvent>event;
    const ch = String.fromCharCode(e.keyCode);
    const regEx = new RegExp(this.regEx);
    if (!regEx.test(ch)) {
      e.preventDefault();
    }
  }
}
