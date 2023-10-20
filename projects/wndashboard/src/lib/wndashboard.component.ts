import { Component, Input, OnInit } from '@angular/core';
import { DashboardDataModel } from './wndashboard.model';

@Component({
  selector: 'lib-wndashboard',
  templateUrl: './wndashboard.component.html',
  styleUrls: ['./wndashboard.component.css']
})
export class WndashboardComponent implements OnInit{

  @Input('data') data: DashboardDataModel[] = []
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}