import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
 
  msg: string;
  constructor(private _service: RegistrationService,private _router:Router) { }

  ngOnInit() {
  }
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
      },
      error => {
        console.log(error);
        this.msg = "Bad credentials,please enter valid emailid and password";
      }
    )
  }

  gotoregistration() {
    this._router.navigate(['/registration'])
  }
}