import { TestBed } from '@angular/core/testing';

import { BuyProcessService } from './buy-process.service';

describe('BuyProcessService', () => {
  let service: BuyProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
