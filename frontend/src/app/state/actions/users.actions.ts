import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";


export const loadUsers = createAction(
    "[Users] Load Users"
);

export const loadUsersSuccess = createAction(
    "[Users] Load Users Success",

    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    "[Users] Load Users Error",

    props<{ error: any }>()
);
    
