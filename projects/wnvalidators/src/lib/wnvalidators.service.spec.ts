import { TestBed } from '@angular/core/testing';

import { WnvalidatorsService } from './wnvalidators.service';

describe('WnvalidatorsService', () => {
  let service: WnvalidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WnvalidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
