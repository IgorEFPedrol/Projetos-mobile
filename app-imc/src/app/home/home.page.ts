import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
peso: number;
altura: number;
imc: number;
classificacao: string;

  constructor() {}

calcularImc()
{
  const altFix = this.altura / 100;
  this.imc = this.peso / (altFix * altFix);

  console.log(this.imc);
  if(this.imc < 18.5)
    this.classificacao = "Abaixo do Peso";

  else if(this.imc <= 24.9)
    this.classificacao = "Peso normal";

  else if(this.imc <= 29.9)
    this.classificacao = "Sobrepeso";

  else if(this.imc <= 34.9)
    this.classificacao = "Obesidade Grau 1!";

  else if(this.imc <= 39.9)
    this.classificacao = "Obesidade Grau 2!";

  else {
    this.classificacao = "Obesidade Grau 3!";
  }
}

limpar()
{
  this.peso = null;
  this.altura = null;
  this.imc = null;
  this.classificacao = "";
}

}
