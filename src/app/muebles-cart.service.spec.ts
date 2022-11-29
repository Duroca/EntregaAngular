import { TestBed } from '@angular/core/testing';

import { MueblesCartService } from './muebles-cart.service';

describe('MueblesCartService', () => {
  let service: MueblesCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MueblesCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
