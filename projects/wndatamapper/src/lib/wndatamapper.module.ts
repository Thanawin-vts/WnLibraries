import { NgModule } from '@angular/core';
import { WndatamapperComponent } from './wndatamapper.component';
import { WndatamapperPipe } from './wndatamapper.pipe';



@NgModule({
  declarations: [
    WndatamapperComponent,
    WndatamapperPipe
  ],
  imports: [
  ],
  exports: [
    WndatamapperComponent,
    WndatamapperPipe
  ]
})
export class WndatamapperModule { }
