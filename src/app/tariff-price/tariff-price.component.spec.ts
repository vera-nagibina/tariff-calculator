import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffPriceComponent } from './tariff-price.component';

describe('TariffPriceComponent', () => {
  let component: TariffPriceComponent;
  let fixture: ComponentFixture<TariffPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
