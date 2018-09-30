import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  logInFrom: FormGroup;

  constructor() { }

  ngOnInit() {
    this.logInFrom = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSignin() {

  }

}
