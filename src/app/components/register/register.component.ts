import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginInfo: any;

  constructor(private httpService: HttpService, private toastr: ToastrService){}

  onSubmit(form: NgForm){
    this.httpService.signUpApi(form.value).subscribe(data => {
      if(data) this.toastr.success('Login successfully');
    })
    this.loginInfo = form.value
  }

}
