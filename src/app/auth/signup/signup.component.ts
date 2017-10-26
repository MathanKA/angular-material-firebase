import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(signup: NgForm){
    const email = signup.value.email;
    const password = signup.value.password;
    this.authService.signupUser(email, password);
  }

  onSignupGoogle(signup: NgForm){
    this.authService.googleSignup();
  }
}
