import { Action, createReducer, on } from "@ngrx/store";
import { loggedInUserInitialState } from "./loggedInUser.reducer";

import * as registerUserActions from '../actions/registerUser.actions';


export const registerUserReducer = createReducer(
    loggedInUserInitialState,
    on(registerUserActions.register, (state, { user }) => ({ ...state, loading: true, error: null })),

    on(registerUserActions.registerSuccess, (state, { user }) => ({ ...state, loading: false, user: { ...user }, error: null })),

    on(registerUserActions.registerError, (state, { error }) => ({ ...state, loading: false, error: { ...error } }))

);

export function reducer(state: any, action: Action) {
    return registerUserReducer(state, action);
}








