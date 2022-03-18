import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdHotdog: number = 0;
  qtdRefri: number = 0;
  qtdBala: number = 0;
  qtdChocolate: number = 0;
  resultado: number = 0;

  constructor() {}

  addHotdog() {
    this.qtdHotdog++;
  }

  addRefri() {
    this.qtdRefri++;
  }

  addBala() {
    this.qtdBala++;
  }

  addChocolate() {
    this.qtdChocolate++;
  }

  delHotdog() {
    if (this.qtdHotdog > 0) this.qtdHotdog--;
  }
  delRefri() {
    if (this.qtdRefri > 0) this.qtdRefri--;
  }
  delBala() {
    if (this.qtdBala > 0) this.qtdBala--;
  }
  delChocolate() {
    if (this.qtdChocolate > 0) this.qtdChocolate--;
  }
}
