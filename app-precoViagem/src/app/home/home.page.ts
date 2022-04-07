import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:      [
    { provide: LOCALE_ID, useValue: 'pt' },
  ], 
})
export class HomePage {

  precoGasolina: number = 0;
  distancia: number = 0;
  consumo: number = 0;
  rendimento: number = 0;
  gastoViagem: number = 0;



  constructor() {}

  calcularGastoViagem() {
    this.gastoViagem = this.precoGasolina * (this.distancia / this.consumo);
  }

}
