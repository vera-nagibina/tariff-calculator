import { TestBed } from '@angular/core/testing';

import { CalcTariffService } from './calc-tariff.service';

describe('CalcTariffService', () => {
  let service: CalcTariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcTariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
