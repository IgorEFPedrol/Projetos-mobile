import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface atividade {
  nome: string;
  peso: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  exercicios: atividade[] = [];
  exerciciosBackup: atividade[] = [];
  novoExercicio: string = '';

  constructor(private toast: ToastController) {
    this.iniciarBanco();
  }
  ngOnInit(): void { }

  async desfazer(tarefaExcluida: atividade) {
    const t = await this.toast.create({
      message: 'Excluído: ' + tarefaExcluida.nome,
      duration: 3000,
      buttons: [
        {
          text: 'Desfazer',
          handler: async () => {
            this.exercicios = [...this.exerciciosBackup];
            localStorage.setItem('exercicios', JSON.stringify(this.exercicios));
          },
        }
      ],
    });
    t.present();
  }

  async iniciarBanco() {
    this.exercicios = JSON.parse(localStorage.getItem('exercicios') || '[]');
  }

  async cadastrarAtividade() {
    if (this.novoExercicio != '') {
      this.exercicios.push({ nome: this.novoExercicio, peso: 0 });
      this.novoExercicio = '';
      localStorage.setItem('exercicios', JSON.stringify(this.exercicios));
    }
  }

  async removerAtividade(posicao: number) {
    console.log("Ué ")
    this.desfazer(this.exercicios[posicao]);
    this.exerciciosBackup = [...this.exercicios];
    this.exercicios.splice(posicao, 1);
    localStorage.setItem('exercicios', JSON.stringify(this.exercicios));
  }

  async atualizarBanco() {
    localStorage.setItem('exercicios', JSON.stringify(this.exercicios));
  }
}

