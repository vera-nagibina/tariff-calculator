import { Component, OnInit } from '@angular/core';
import { CalcTariffService } from '../calc-tariff.service'
import { Company, Tariff } from '../tariff-card/tariff-card.component';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent implements OnInit {

  kilometersCount!: number;
  age!: number;
  baggageWeight!: number;
  tariff: Tariff[] = [];
  cardsCompany: Company[] = [];
  notFound: boolean = false;
  
  
  constructor(public calcTariffService: CalcTariffService) { }

  ngOnInit(): void {
   
  }
   

  calculateTariff() {
    this.cardsCompany = [];
    this.tariff = this.calcTariffService
    .calcTariff('Аэрофлот', this.kilometersCount, this.age, this.baggageWeight);
    if (this.tariff.length > 0) {
      this.cardsCompany.push({
        name: 'Аэрофлот' , 
        tariff: this.tariff
      })
    }
    this.tariff = this.calcTariffService
    .calcTariff('РЖД', this.kilometersCount, this.age, this.baggageWeight);
    if (this.tariff.length > 0) {
      this.cardsCompany.push({
        name: 'РЖД' , 
        tariff: this.tariff
      })
    }
    if (this.cardsCompany.length === 0) this.notFound = true;
    else  this.notFound = false;

  }

}
