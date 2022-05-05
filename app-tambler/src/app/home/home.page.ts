import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Frase {
  id: number;
  frase: string;
  autor: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = 'http://lucasreno.kinghost.net/frase';
  frase: Frase = {id: 0, frase: '', autor: ''};

  constructor(private http: HttpClient) {
    http.get<any>(this.url).subscribe(
      resposta => {
        this.frase = resposta[0];
      }
    );
  }



}
