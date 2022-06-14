import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categoria } from '../interface/categoria';
import { Produto } from '../interface/produto';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';


import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProdutoEscolhidoService } from '../service/produto-escolhido.service';
import { Carrinho } from '../interface/carrinho';


registerLocaleData(ptBr);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:      [
    { provide: LOCALE_ID, useValue: 'pt' },
  ], 
})
export class HomePage {
  URL_BASE = 'http://lucasreno.kinghost.net/delivery';
  dados: Categoria[] = [];
  carrinho: Carrinho[] = [];
  
  constructor(
    private http: HttpClient,
    private prodService: ProdutoEscolhidoService
  ) {
    this.pegarDados();
  }

  salvarProduto(produto: Produto) {
    this.prodService.produto = produto;

  }

  pegarDados() {
    this.http.get<Categoria[]>(this.URL_BASE + '/categorias').subscribe(
      resposta => {
        this.dados = resposta;
        this.dados.forEach(dado => {
          this.http.get<Produto[]>(this.URL_BASE + '/produtos/' + dado.idCategoria).subscribe(
            resp => {
              dado.produtos = resp;
            }
          );
        })
      }
    );
  }

}
