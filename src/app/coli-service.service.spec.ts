import { TestBed } from '@angular/core/testing';

import { ColiServiceService } from './coli-service.service';

describe('ColiServiceService', () => {
  let service: ColiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
