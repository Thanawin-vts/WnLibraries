import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[Thai]',
})
export class ThaiDirective {
  constructor() {}

  @Input('specialChar') params: string = '';
  @Output() validater = new EventEmitter();
  regEx = new RegExp(/^[\u0E00-\u0E7F().-\s]*$/);
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    const e = <KeyboardEvent>event;
    const ch = String.fromCharCode(e.keyCode);
    const regEx = new RegExp(this.regEx);
    if (!regEx.test(ch)) {
      e.preventDefault();
    }
  }
}
