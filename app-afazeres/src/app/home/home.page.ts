import { Component } from '@angular/core';
import { empty, EMPTY } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarefas: string[] = [
    'Arrumar o quarto',
    'Lavar a louça',
    'Passar pano'
  ];
  novaTarefa: string = '';

  constructor() {}

  cadastrarTarefa()
  {
    if (this.novaTarefa != '')
    {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = '';
    }  
  }

  removerTarefa(posicao) 
  {
    this.tarefas.splice(posicao, 1);
  }
}
