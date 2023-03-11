import { createReducer,on } from "@ngrx/store";
import * as UsersActions from '../actions/users.actions';
import { User } from "src/app/interfaces/user.interface";


export interface UsersState {
    users: User[];
    loading: boolean;
    error: any;
}


export const initialState: UsersState = {
    users: [],
    loading: true,
    error: null
};


export const usersReducer = createReducer(
    initialState,
    on(UsersActions.loadUsers, (state) => {
        return {
            ...state,
            loading: false
        }
    }
    ),
    on(UsersActions.loadUsersSuccess, (state, { users }) => {
        return {
            ...state,
            loading: false,
            users: [...users]
        }
    }

    ),
    on(UsersActions.loadUsersFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    )
);




