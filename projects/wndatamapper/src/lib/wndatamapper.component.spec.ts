import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WndatamapperComponent } from './wndatamapper.component';

describe('WndatamapperComponent', () => {
  let component: WndatamapperComponent;
  let fixture: ComponentFixture<WndatamapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WndatamapperComponent]
    });
    fixture = TestBed.createComponent(WndatamapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
