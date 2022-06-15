import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../interface/carrinho';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinho: Carrinho[] = [];
  totalCarrinho: number = 0;

  constructor(
    private storage: Storage
  ) { }

    ionViewWillEnter() {
      this.iniciarBanco();
    }

    async iniciarBanco() {
      await this.storage.create();
      this.carrinho = await this.storage.get("carrinho") ?? [];
      this.totalCarrinho = 0;
      this.carrinho.forEach(c => {
        this.totalCarrinho += c.quantidade * c.produto.valor;
      });
    }

  ngOnInit() {
  }

  remover(indice){
    this.carrinho.splice(indice, 1);
    this.storage.set("carrinho", this.carrinho);
  }

}
