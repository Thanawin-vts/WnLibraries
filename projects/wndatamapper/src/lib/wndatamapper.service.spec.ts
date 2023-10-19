import { TestBed } from '@angular/core/testing';

import { WndatamapperService } from './wndatamapper.service';

describe('WndatamapperService', () => {
  let service: WndatamapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WndatamapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
