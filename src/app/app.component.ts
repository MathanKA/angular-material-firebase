import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyD8m-bjsR9tXSq_-QwcIeSWf8NxYjsIpSc',
      authDomain: 'angular-material-plus.firebaseapp.com'
    });
  }

}
