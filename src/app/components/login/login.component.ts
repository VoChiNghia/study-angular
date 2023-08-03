import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginInfo } from 'src/app/model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginInfo: LoginInfo | undefined;

  constructor(){}
  onSubmit(form: NgForm){
    this.loginInfo = form.value
  }
}
