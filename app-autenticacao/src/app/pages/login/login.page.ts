import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public toast: ToastController
  ) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.authService.GoogleAuth().then((res) => {
    }).catch((error) => {
      let mensagem = error.code;
      if(error.code == 'auth/popup-closed-by-user')
        mensagem = 'Login cancelado';
      this.mensagemErro(mensagem);
    });
  }

  async mensagemErro(mensagem){
    const toast = await this.toast.create({
      message: mensagem,
      duration: 1500,
      color: 'danger',
      position: 'bottom'
    });
    await toast.present();
  }

  login(email, password){
    if(email.value && password.value) {
      this.authService.SignIn(email.value, password.value).then(res => {
        this.router.navigate(['home']);
      }).catch(error => {
        let mensagem = error.code;
        if(error.code == 'auth/invalid-email')
          mensagem = 'Email inválido';
        else if(error.code == 'auth/user-not-found')
          mensagem = 'Usuário não encontrado';
        else if(error.code == 'auth/wrong-password')
          mensagem = 'Senha incorreta';  
        this.mensagemErro(mensagem);
      });
    }
  }
}
