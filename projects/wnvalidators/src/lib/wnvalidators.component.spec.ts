import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnvalidatorsComponent } from './wnvalidators.component';

describe('WnvalidatorsComponent', () => {
  let component: WnvalidatorsComponent;
  let fixture: ComponentFixture<WnvalidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WnvalidatorsComponent]
    });
    fixture = TestBed.createComponent(WnvalidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
