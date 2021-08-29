import { Component, OnInit, Input } from '@angular/core';
import { Tariff } from '../tariff-card/tariff-card.component';

@Component({
  selector: 'app-tariff-price',
  templateUrl: './tariff-price.component.html',
  styleUrls: ['./tariff-price.component.scss']
})
export class TariffPriceComponent implements OnInit {

  @Input() tariff: Tariff = {
    type: '',
    price: 0
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
