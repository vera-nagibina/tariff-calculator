import { Injectable } from '@angular/core';
import { Tariff } from './tariff-card/tariff-card.component'


@Injectable({
  providedIn: 'root'
})
export class CalcTariffService {

  economPrice: number = 0;
  advancedPrice: number = 0;
  luxPrice: number = 0;
  tariff: Tariff[] = [];

  constructor() { }

  calcTariff(company: string, kilometersCount: number, age: number, baggageWeight: number) {
      this.tariff = [];
      if (company === 'Аэрофлот') {
        this.economPrice = kilometersCount * 4;
        this.advancedPrice = kilometersCount * 8;
        this.luxPrice = kilometersCount * 15;
        if (age < 7){
          this.advancedPrice -= this.advancedPrice * 0.3;
        }

        if (age < 16){
          this.luxPrice -= this.luxPrice * 0.3;
        }
      
        if (baggageWeight > 5 && baggageWeight <= 20) {
          this.economPrice += 4000;
        }
        if (baggageWeight > 20) {
          this.economPrice = 0;
        }

        if (baggageWeight > 20 && baggageWeight <= 50) {
          this.advancedPrice += 5000;
        }
        if (baggageWeight > 50) {
          this.advancedPrice = 0;
          this.luxPrice = 0;
        }
    }

    if (company === 'РЖД') {
      this.economPrice = kilometersCount * 0.5;
      this.advancedPrice = kilometersCount * 2;
      this.luxPrice = kilometersCount * 4;
      if (age < 5){
        this.economPrice -= this.economPrice * 0.5;
      }
      if (age < 8){
        this.advancedPrice -= this.advancedPrice * 0.3;
      }

      if (age < 16){
        this.luxPrice -= this.luxPrice * 0.2;
      }
      
      if (baggageWeight > 15 && baggageWeight <= 50) {
        this.economPrice += (baggageWeight - 15) * 50;
      }
      if (baggageWeight > 50) {
        this.economPrice = 0;
      }

      if (baggageWeight > 20 && baggageWeight <= 60) {
        this.advancedPrice += (baggageWeight - 20) * 50;
      }
      if (baggageWeight > 60) {
        this.advancedPrice = 0;
        this.luxPrice = 0;
      }

    }
    
    if (this.economPrice !== 0) this.tariff.push({type: 'Эконом', price: this.economPrice});
    if (this.advancedPrice !== 0) this.tariff.push({type: 'Продвинутый', price: this.advancedPrice});
    if (this.luxPrice !== 0)this.tariff.push({type: 'Люкс', price: this.luxPrice});

    return this.tariff;

  }
}
