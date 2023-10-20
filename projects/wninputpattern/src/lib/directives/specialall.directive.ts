import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[SpecialAll]',
})
export class SpecialAllDirective {
  constructor() {}

  @Input('specialChar') params: string = '';
  @Output() validater = new EventEmitter();
  regEx = new RegExp(/[!#${}*&^<>~`=|;฿%()'+",./:?@_\[\]\/\-\\]/g);

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    }

    const ch = String.fromCharCode(e.keyCode);

    const regEx = new RegExp(this.regEx);
    if (regEx.test(ch)) {
      e.preventDefault();
    }
  }
}
