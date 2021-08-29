import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputDataComponent } from './input-data/input-data.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TariffCardComponent } from './tariff-card/tariff-card.component';
import {CardModule} from 'primeng/card';
import { TariffPriceComponent } from './tariff-price/tariff-price.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDataComponent,
    TariffCardComponent,
    TariffPriceComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
