import { TestBed } from '@angular/core/testing';

import { WninputcontrolService } from './wninputcontrol.service';

describe('WninputcontrolService', () => {
  let service: WninputcontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WninputcontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
