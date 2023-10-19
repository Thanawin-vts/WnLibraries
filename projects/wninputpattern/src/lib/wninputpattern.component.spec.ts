import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WninputpatternComponent } from './wninputpattern.component';

describe('WninputpatternComponent', () => {
  let component: WninputpatternComponent;
  let fixture: ComponentFixture<WninputpatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WninputpatternComponent]
    });
    fixture = TestBed.createComponent(WninputpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
