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
  tipoTempoPerdido: string = "Dia(s)!";

  constructor() {}

  calcularTempoVidaPerdido() {
    const totalDiasPorAno = 360;
    const minutosPerdidoporCigarro = 10;
    const totalMinutosPorDia = 1440;
    const totalDiasPorMes = 30;
    const totalMesesPorAno = 12;
    let totalDiasFumando = this.quantidadeAnoFumando * totalDiasPorAno;
    let totalCigarroFumado = totalDiasFumando * this.quantidadeCigarro;
    this.tempoVidaPerdido = totalCigarroFumado * minutosPerdidoporCigarro;
    this.tempoVidaPerdido = this.tempoVidaPerdido / totalMinutosPorDia;
    if (this.tempoVidaPerdido >= 30) 
    {
      this.tempoVidaPerdido = this.tempoVidaPerdido / totalDiasPorMes;
      this.tipoTempoPerdido = "Mês(es)";
      if (this.tempoVidaPerdido >= 12)
      {
        this.tempoVidaPerdido = this.tempoVidaPerdido / totalMesesPorAno;
        this.tipoTempoPerdido = "Ano(s)";
      }
    }
  }
}
