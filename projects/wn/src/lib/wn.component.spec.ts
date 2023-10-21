import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnComponent } from './wn.component';

describe('WnComponent', () => {
  let component: WnComponent;
  let fixture: ComponentFixture<WnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WnComponent]
    });
    fixture = TestBed.createComponent(WnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
