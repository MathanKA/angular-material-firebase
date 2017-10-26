import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AlertService } from '../shared/alert.service';

@Injectable()


export class AuthService {
  token: string;
  constructor(private router: Router, private alertService: AlertService){

  }
// First time  User
  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.alertService.showAlert('Account Created Successfully. Please check your email to verify the account.');
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
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
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
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

  // Login Functionality
  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                return this.token = token;
              }
            );
        }
      )
      .catch(
        error => {
          this.alertService.showAlert(error.message);
          return error.message;
        });
  }

  // Google Sigin
  googleSignin(){
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(providerGoogle)
      .then((result) => {
          const token = result.credential.accessToken;
          const currentUser = result.user;
      })
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              return this.token = token;
            }
          );
        this.alertService.showAlert('Google login succesful');
      })
      .catch(
        error => {
          this.alertService.showAlert(error.message);
          return error.message;
        });
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
    this.alertService.showAlert('Logout Successful');
  }

}
