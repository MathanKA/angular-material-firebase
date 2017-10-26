import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AlertService } from '../shared/alert.service';

@Injectable()


export class AuthService {
  token: string;
  constructor(private router: Router, private alertService: AlertService){

  }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.alertService.showAlert('Account Created Successfully. Please check your email to verify the account.');
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);

        }
      )
      .catch(
        error => {
          this.alertService.showAlert(error.message);
          return error.message;
        }
      );
  }
}
