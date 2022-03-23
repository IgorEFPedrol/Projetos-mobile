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
  pagamento: number = 0;
  troco: number = 0;

  constructor() {}

  calcularTotal() {
    this.resultado = this.qtdHotdog * 5;
    this.resultado += this.qtdRefri * 3.5;
    this.resultado += this.qtdBala * 0.25;
    this.resultado += this.qtdChocolate * 2;
    if (this.resultado < this.pagamento)
    this.calcularTroco();
  }

  addHotdog() {
    this.qtdHotdog++;
    this.calcularTotal();
  }

  addRefri() {
    this.qtdRefri++;
    this.calcularTotal();
  }

  addBala() {
    this.qtdBala++;
    this.calcularTotal();
  }

  addChocolate() {
    this.qtdChocolate++;
    this.calcularTotal();
  }

  delHotdog() {
    if (this.qtdHotdog > 0) {
     this.qtdHotdog--;
     this.calcularTotal();
    }
  }
  delRefri() {
    if (this.qtdRefri > 0) {
    this.qtdRefri--;
    this.calcularTotal();
    }
  }
  delBala() {
    if (this.qtdBala > 0) {
      this.qtdBala--;
      this.calcularTotal();
    }
  }
  delChocolate() {
    if (this.qtdChocolate > 0) {
      this.qtdChocolate--;
      this.calcularTotal();
    }
  }

  calcularTroco() {
      this.pagamento -= this.resultado;
      this.troco = this.pagamento;
  }

  limpar() {
    this.qtdHotdog = 0;
    this.qtdRefri = 0;
    this.qtdBala = 0;
    this.qtdChocolate = 0;
    this.resultado = 0;
    this.pagamento = 0;
    this.troco = 0;
  }
}
