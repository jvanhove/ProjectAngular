import { TestBed } from '@angular/core/testing';

import { WatchitemService } from './watchitem.service';

describe('WatchitemService', () => {
  let service: WatchitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
