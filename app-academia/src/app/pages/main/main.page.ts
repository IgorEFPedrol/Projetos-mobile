import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  exercicios: string[] = [];
  exercicioBackup: string[] = [];
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

  async cadastrarTarefa()
  {
    if (this.novaTarefa != '')
    {
    this.exercicios.push(this.novaTarefa);
    this.novoExercicio = '';
    await this.storage.set('exercicios', this.exercicios)
    }  
  }

  async removerTarefa(posicao) 
  {
    this.desfazer(this.exercicios[posicao]);
    this.exerciciosBackup = [...this.exercicios];
    this.exercicios.splice(posicao, 1);
    await this.storage.set('exercicios', this.exercicios);
  }
}
