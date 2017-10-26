import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignin(signin: NgForm){
    const email = signin.value.email;
    const password = signin.value.password;
    this.authService.signinUser(email, password);
  }

  onSigninGoogle(signin: NgForm){
    this.authService.googleSignin();
  }

}
