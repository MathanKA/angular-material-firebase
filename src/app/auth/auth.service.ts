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

  // Google SignUp
  googleSignup(){
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(GoogleProvider)
      .then(result => {
        if (result.credential) {
          const token = result.credential.accessToken;
        }
        this.router.navigate(['/']);
      })
      .catch(error => {
          console.log(error);
      });
  }
}
