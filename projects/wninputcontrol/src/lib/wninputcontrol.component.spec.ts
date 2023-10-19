import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WninputcontrolComponent } from './wninputcontrol.component';

describe('WninputcontrolComponent', () => {
  let component: WninputcontrolComponent;
  let fixture: ComponentFixture<WninputcontrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WninputcontrolComponent]
    });
    fixture = TestBed.createComponent(WninputcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
