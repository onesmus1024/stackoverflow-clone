import { createAction,props } from "@ngrx/store";

import { userToLogin } from "src/app/interfaces/userToLogin.interface";
import { loggedInUser } from "src/app/interfaces/loggedInUser.interface";

export const login = createAction( '[Login] Login', props<{ user: userToLogin }>());

export const loginSuccess = createAction( '[Login] Login Success', props<{ user: loggedInUser }>());

export const loginError = createAction( '[Login] Login Error', props<{ error: any }>());

