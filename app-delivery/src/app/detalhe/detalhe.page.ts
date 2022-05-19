import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interface/categoria';
import { Produto } from '../interface/produto';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  URL_BASE = 'http://lucasreno.kinghost.net/delivery';
  dados: Categoria[] = [];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
  }

}
