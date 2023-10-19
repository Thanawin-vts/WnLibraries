import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WndashboardComponent } from './wndashboard.component';

describe('WndashboardComponent', () => {
  let component: WndashboardComponent;
  let fixture: ComponentFixture<WndashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WndashboardComponent]
    });
    fixture = TestBed.createComponent(WndashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
