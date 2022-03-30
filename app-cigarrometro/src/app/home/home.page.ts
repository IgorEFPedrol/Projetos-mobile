import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeCigarro: number = null;
  quantidadeAnoFumando: number = null;
  tempoVidaPerdido: number = 0;

  constructor() {}

  calcularTempoVidaPerdido() {
    const totalDiasPorAno = 360;
    const minutosPerdidoporCigarro = 10;
    const totalMinutosPorDia = 1440;
    let totalDiasFumando = this.quantidadeAnoFumando * totalDiasPorAno;
    let totalCigarroFumado = totalDiasFumando * this.quantidadeCigarro;
    this.tempoVidaPerdido = totalCigarroFumado * minutosPerdidoporCigarro;
    this.tempoVidaPerdido = this.tempoVidaPerdido / totalMinutosPorDia;

  }
}
