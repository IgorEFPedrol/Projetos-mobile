import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pergunta: string;
  respostaPergunta: string;
  resposta: string;
  constructor(private http: HttpClient) {}
  
  ngOnInit(){
    this.solicitarCharada();
  }

  solicitarCharada(){
    const url = 'http://lucasreno.kinghost.net/charada';
    this.http.get(url).subscribe(resultado => {
      this.pergunta = resultado[0]["pergunta"];
      this.respostaPergunta = resultado[0]["resposta"];
      this.resposta = "";
    });
  }
  solicitarResposta(){
    this.resposta = this.respostaPergunta;
  }
}
