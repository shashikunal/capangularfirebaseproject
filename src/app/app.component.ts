import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'qspiders';
  ngOnInit(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAHfIznB_TIqmSEGuqCLZaV4YSVbyWZRY",
    authDomain: "nodeangular-c13fc.firebaseapp.com",
    databaseURL: "https://nodeangular-c13fc.firebaseio.com",
    projectId: "nodeangular-c13fc",
    storageBucket: "nodeangular-c13fc.appspot.com",
    messagingSenderId: "736032489299"
  };
  firebase.initializeApp(config);
  }
}
