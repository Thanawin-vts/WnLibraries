import { TestBed } from '@angular/core/testing';

import { WnService } from './wn.service';

describe('WnService', () => {
  let service: WnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
