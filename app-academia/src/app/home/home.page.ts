import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

interface atividade{
  nome: string;
  peso: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  exercicios: atividade[] = [];
  exerciciosBackup: atividade[] = [];
  novoExercicio: string = '';

  constructor(private storage: Storage, private toast: ToastController) {
    this.iniciarBanco();
  }

  async desfazer(tarefaExcluida) {
    const t = await this.toast.create({
      message: 'Excluído: ' + tarefaExcluida,
      duration: 3000,
      buttons: [
        {
          text: 'Desfazer',
          handler: async () => {
            this.exercicios = [...this.exerciciosBackup];
            await this.storage.set('exercicios', this.exercicios);
          },
        }
      ],
    });    
    t.present();
  }

  async iniciarBanco() {
    await this.storage.create();
    this.exercicios = await this.storage.get('exercicios') ?? [];
  }

  async cadastrarAtividade()
  {
    if (this.novoExercicio != '')
    {
    this.exercicios.push({nome: this.novoExercicio, peso: 0});
    this.novoExercicio = '';
    await this.storage.set('exercicios', this.exercicios)
    }  
  }

  async removerAtividade(posicao) 
  {
    this.desfazer(this.exercicios[posicao]);
    this.exerciciosBackup = [...this.exercicios];
    this.exercicios.splice(posicao, 1);
    await this.storage.set('exercicios', this.exercicios);
  }

  async atualizarBanco(){
    await this.storage.set('exercicios', this.exercicios);
  }
}
