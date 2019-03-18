import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  CheckData(username){
    console.log(username);
  }

  submit(form){
    console.log(form);
  }
  constructor() { }

  ngOnInit() {
  }

}
