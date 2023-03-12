import { UsersState } from "../reducers/users.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";


export const selectUsersState = createFeatureSelector<UsersState>('users');


export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.users
);


export const selectUsersLoading = createSelector(
    selectUsersState,
    (state: UsersState) => state.loading
);


export const selectUsersError = createSelector(
    selectUsersState,
    (state: UsersState) => state.error
);
