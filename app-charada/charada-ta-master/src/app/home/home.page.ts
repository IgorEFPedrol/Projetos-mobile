import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pergunta: string;
  resposta: string;
  constructor(private http: HttpClient) {}

  solicitarCharada(){
    const url = 'http://lucasreno.kinghost.net/charada';
    this.http.get(url).subscribe(resultado => {
      this.pergunta = resultado[0]["pergunta"];
      this.resposta = resultado[0]["resposta"];
    });
  }
}
