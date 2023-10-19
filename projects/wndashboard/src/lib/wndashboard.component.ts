import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-wndashboard',
  templateUrl: './wndashboard.component.html',
  styleUrls: []
})
export class WndashboardComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    console.log('test');
    
  }
}
