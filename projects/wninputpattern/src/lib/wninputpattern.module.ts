import { NgModule } from '@angular/core';
import { WninputpatternComponent } from './wninputpattern.component';
import { NumberDirective } from './directives/number.directive';
import { ThaiDirective } from './directives/thai.directive';
import { EnglishDirective } from './directives/english.directive';
import { SpecialDirective } from './directives/special.directive';
import { SpecialAllDirective } from './directives/specialall.directive';
import { EmailDirective } from './directives/email.directive';



@NgModule({
  declarations: [
    WninputpatternComponent,
    NumberDirective,
    ThaiDirective,
    EnglishDirective,
    SpecialDirective,
    SpecialAllDirective,
    EmailDirective
  ],
  imports: [
  ],
  exports: [
    WninputpatternComponent,
    NumberDirective,
    ThaiDirective,
    EnglishDirective,
    SpecialDirective,
    SpecialAllDirective,
    EmailDirective
  ]
})
export class WninputpatternModule { }
