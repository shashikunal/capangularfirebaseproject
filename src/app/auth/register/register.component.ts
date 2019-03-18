import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, EmailValidator } from '@angular/forms';
import * as firebase from 'firebase';
import { notificationService } from 'src/app/shared/notification.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form = new FormGroup({
  //   username : new FormControl("" , [
  //     Validators.required,
  //     Validators.minLength(3),
  //     Validators.pattern('shashi')
  //   ])
  // });

  // get username(){
  //   return this.form.get('username');
  // }
  // get password(){
  //   return this.form.get('password');
  // }
  constructor( public notifier:notificationService) { }
  onSubmit(form:NgForm){
    var username = form.value.username;
    var password = form.value.password;
    var phonenumber = form.value.phonenumber;
    console.log(username , password);
    firebase.auth()
    .createUserWithEmailAndPassword(username , password).then(userData =>{
      console.log(userData);
      userData.user.sendEmailVerification();

      firebase.database().ref(`/jspiderusers ${userData.user.uid}`).set({
        username,
        phonenumber,
        uid : userData.user.uid

      }).then(()=>{
        firebase.auth().signOut();
      })


    }).catch(err => {
      this.notifier.display('error' , err.message)
      console.log(err)

    });
  }



  ngOnInit() {
  }

}
