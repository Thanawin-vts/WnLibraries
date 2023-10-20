import { TestBed } from '@angular/core/testing';

import { WndashboardService } from './wndashboard.service';

describe('WndashboardService', () => {
  let service: WndashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WndashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
