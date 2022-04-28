import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  senha: string = '';
  pontuacao: number = 0;
  frase: string[] = ['Muito Fraco', 'Fraco', 'Médio', 'Forte', 'Muito Forte']
  imagens: string[] = ['', '../../assets/senha/1.png', '../../assets/senha/2.png', '../../assets/senha/3.png']

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
      
    if(this.pontuacao == 2)
    document.getElementById('frase').style.color = "yellow";

    if(this.pontuacao == 3)
    document.getElementById('frase').style.color = "green";

    if(this.pontuacao == 4)
    document.getElementById('frase').style.color = "blue";
    
  }
}
