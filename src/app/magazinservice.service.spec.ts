import { TestBed } from '@angular/core/testing';

import { MagazinserviceService } from './magazinservice.service';

describe('MagazinserviceService', () => {
  let service: MagazinserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazinserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
