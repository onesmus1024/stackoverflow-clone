import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { UserService } from "src/app/services/user.service";

import * as usersActions from "../actions/users.actions";
import { of } from "rxjs";


@Injectable()
export class UserEffects {
    
        constructor(
            private actions$: Actions,
            private userService: UserService
        ) { }
    
        loadUsers$ = createEffect(() => this.actions$.pipe(
            ofType(usersActions.loadUsers),
            mergeMap(() => this.userService.getUsers().pipe(
                map(users => usersActions.loadUsersSuccess({ users })),
                catchError(error => of(usersActions.loadUsersFailure({ error })))
            )),
        ));



    }
    