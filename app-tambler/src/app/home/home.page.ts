import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = 'http://lucasreno.kinghost.net/frase';

  constructor(private http: HttpClient) {
    http.get<any>(this.url)
  }



}
