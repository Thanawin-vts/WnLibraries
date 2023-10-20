import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[Email]',
})
export class EmailDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('specialChar') params: string = '';
  @Output() validater = new EventEmitter();
  regEx = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  @HostListener('input', ['$event']) onIputChange(event: any) {
    // const e = <KeyboardEvent>event;
    // const ch = String.fromCharCode(e.keyCode);
    // const regEx = new RegExp(this.regEx);
    // if (regEx.test(ch)) {
    //   e.preventDefault();
    // }
    const inputValue: string = this.el.nativeElement.value;
    if (!this.isValidEmail(inputValue)) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #ccc');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
