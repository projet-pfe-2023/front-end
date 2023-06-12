import { TestBed } from '@angular/core/testing';

import { DouaneService } from './douane.service';

describe('DouaneService', () => {
  let service: DouaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DouaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
