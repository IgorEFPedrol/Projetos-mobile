import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  login(email, password){
      this.authService.SignIn(email.value, password.value).then( res => {
        this.router.navigate(['home']);
      }).catch( error => {
        window.alert(error.message);
      });
  }
}
