import { TestBed } from '@angular/core/testing';

import { AttractionsService } from './attractions.service';

describe('AttractionsService', () => {
  let service: AttractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
