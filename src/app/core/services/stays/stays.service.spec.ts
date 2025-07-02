import { TestBed } from '@angular/core/testing';

import { StaysService } from './stays.service';

describe('StaysService', () => {
  let service: StaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
