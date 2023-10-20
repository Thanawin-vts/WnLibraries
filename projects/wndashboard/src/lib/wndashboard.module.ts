import { NgModule } from '@angular/core';
import { WndashboardComponent } from './wndashboard.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    WndashboardComponent
  ],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    WndashboardComponent
  ]
})
export class WndashboardModule { }
