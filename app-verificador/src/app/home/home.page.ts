import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  senha: string = '';
  pontuacao: number = 0;

  constructor() {}

  verificarSenha() {
    this.pontuacao = 0;
    if(this.senha.match(/[a-z]/))
      this.pontuacao++;    

    if(this.senha.match(/[A-Z]/))
      this.pontuacao++;
      
    if(this.senha.match(/[0-9]/))
      this.pontuacao++;  

    if(this.senha.length > 8)   
      this.pontuacao++;    
  }
}
