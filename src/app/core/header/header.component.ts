import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import * as fromApp from '../../store/app.reducers'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuth from '../../auth/store/auth.redux'
import * as AuthActions from '../../auth/store/auth.actions'
import { dropDownAnimation } from '../animations/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [dropDownAnimation]
})
export class HeaderComponent implements OnInit {

  // mobile_nav_status = false;
  animation_state = 'up';

  login = true;
  menuIcon: string;
  logInFrom: FormGroup;
  authState: Observable<fromAuth.State>
  loginFormShow = false;
  
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.menuIcon = "more_vert";
    this.authState = this.store.select('auth');
  }

  toggle_animation_state(){
    // this.mobile_nav_status = !this.mobile_nav_status;
    this.animation_state = this.animation_state === 'down' ? 'up' : 'down';
    
    
  }

  onLogin() {
    this.loginFormShow = !this.loginFormShow;
    this.logInFrom = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSignin(){
    this.loginFormShow = !this.loginFormShow;
    const email = this.logInFrom.value.email;
    const password = this.logInFrom.value.password;
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}))
    
  }

  onLogout(){
    this.loginFormShow = false;
    this.store.dispatch(new AuthActions.Logout())
  }

}
