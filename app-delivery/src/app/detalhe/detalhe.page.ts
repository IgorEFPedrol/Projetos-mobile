import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Carrinho } from '../interface/carrinho';
import { Produto } from '../interface/produto';
import { ProdutoEscolhidoService } from '../service/produto-escolhido.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  produto: Produto;
  quantidade: number = 1;
  carrinho: Carrinho[];

  constructor(
    private prodService: ProdutoEscolhidoService,
    private storage: Storage
  ) {
    this.produto = prodService.produto; 
    this.iniciarBanco();  
  }

  async iniciarBanco() {
    await this.storage.create();
    this.carrinho = await this.storage.get('carrinho');

  }

  subQtd() {
    if(this.quantidade > 1)
      this.quantidade--;
  }

  addQtd() {
    this.quantidade++;
  }

  async addCarrinho() {
    this.carrinho.push({quantidade: this.quantidade, produto: this.produto});
    await this.storage.set('carrinho', this.carrinho);
  }

  ngOnInit() {
  }

}
