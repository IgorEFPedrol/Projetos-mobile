import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from '../class/results';
import { Forecast } from '../class/forecast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results: Results = new Results();

  constructor(private http: HttpClient) {
    this.results.forecast = [
      new Forecast(),
      new Forecast(),
      new Forecast(),
      new Forecast(),
      new Forecast(),
    ];
  }

  ngOnInit() {
    const cors = 'http://cors-anywhere.herokuapp.com/';
    const url = cors + 'https://api.hgbrasil.com/weather?woeid=457351'
    this.http.get(url).subscribe(
      response => this.results = response["results"]
    );
  }


}
