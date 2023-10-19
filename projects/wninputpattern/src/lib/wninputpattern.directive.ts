import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[Number]',
})
export class WninputpatternDirective {
  constructor() {}

  @Input('specialNumber') params: string = '';
  @Output() validater = new EventEmitter();
  regEx = new RegExp(/^[0-9]*$/g);

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    const e = <KeyboardEvent>event;
    console.log(e.key);
    
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    }

    const ch = String.fromCharCode(e.keyCode);

    const regEx = new RegExp(this.regEx);
    if (!regEx.test(ch)) {
      e.preventDefault();
    }
  }
}
