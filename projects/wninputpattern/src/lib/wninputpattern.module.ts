import { NgModule } from '@angular/core';
import { WninputpatternComponent } from './wninputpattern.component';
import { NumberDirective } from './directives/number.directive';
import { ThaiDirective } from './directives/thai.directive';
import { EnglishDirective } from './directives/english.directive';



@NgModule({
  declarations: [
    WninputpatternComponent,
    NumberDirective,
    ThaiDirective,
    EnglishDirective
  ],
  imports: [
  ],
  exports: [
    WninputpatternComponent,
    NumberDirective,
    ThaiDirective,
    EnglishDirective
  ]
})
export class WninputpatternModule { }
