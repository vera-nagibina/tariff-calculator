import { Component, OnInit, Input  } from '@angular/core';

export interface Tariff {
  type: string,
  price: number
}
export interface Company {
  name: string;
  tariff: Tariff[]
}

@Component({
  selector: 'app-tariff-card',
  templateUrl: './tariff-card.component.html',
  styleUrls: ['./tariff-card.component.scss']
})



export class TariffCardComponent implements OnInit {

  @Input() cardCompany: Company = {
    name: '',
    tariff: [
      {type: '', price: 0}
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  

}
