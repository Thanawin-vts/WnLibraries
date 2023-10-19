import { TestBed } from '@angular/core/testing';

import { WninputpatternService } from './wninputpattern.service';

describe('WninputpatternService', () => {
  let service: WninputpatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WninputpatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
