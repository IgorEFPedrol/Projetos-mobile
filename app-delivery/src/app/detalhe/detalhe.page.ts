import { Component, OnInit } from '@angular/core';
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
  constructor(private prodService: ProdutoEscolhidoService) {
    this.produto = prodService.produto;   
  }

  subQtd() {
    if(this.quantidade > 1)
      this.quantidade--;
  }

  addQtd() {
    this.quantidade++;
  }
  
  ngOnInit() {
  }

}
