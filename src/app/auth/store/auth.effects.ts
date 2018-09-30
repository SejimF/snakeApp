import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as firebase from 'firebase';
import {map, tap, switchMap, mergeMap} from 'rxjs/operators'
import { from } from 'rxjs';

import * as AuthActions from './auth.actions';
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects{

    //////////////////////////////////////////////
    //      SIGNIN WITH EMAIL AND PASSWORD
    //////////////////////////////////////////////

@Effect()
authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .pipe(map((action: AuthActions.TrySignup) => {
        return action.payload;
    })
    ,switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    ,switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    })
    ,mergeMap((token: string) => {
        return [
            {
                type: AuthActions.SIGNIN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ];
    }));

    //////////////////////////////////////////////
    //                   LOGOUT
    //////////////////////////////////////////////

    @Effect({dispatch: false})
    authLogout = this.actions$
      .ofType(AuthActions.LOGOUT)
      .pipe(tap(() => {
      }));


constructor(private actions$: Actions, private router: Router) {  }

}