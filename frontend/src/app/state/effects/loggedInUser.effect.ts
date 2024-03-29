import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { LoginService } from "src/app/services/auth/login/login.service";


import * as loginActions from "../actions/loggeInUser.actions";



@Injectable()
export class LoggedInUserEffects {
    constructor(private actions$: Actions, private loginService: LoginService) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
        ofType(loginActions.login),
        mergeMap((action) =>
            this.loginService.login(action.user).pipe(
                tap((user) => {
                    localStorage.setItem("token", user.token);
                   
                }),
            map((user) => loginActions.loginSuccess({ user })),
            catchError(async (error) => loginActions.loginError({ error }))
            )
        )
        )
    );
    }