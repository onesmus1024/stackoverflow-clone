import { CommentsState } from "../reducers/comment.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Comment } from "src/app/interfaces/comment.interface";

export const selectCommentsState = createFeatureSelector<CommentsState>('comments');



export const selectComments = createSelector(
    selectCommentsState,
    (state: CommentsState) => state.comments
);


export const selectCommentsLoading = createSelector(
    selectCommentsState,
    (state: CommentsState) => state.loading
);


export const selectCommentsError = createSelector(
    selectCommentsState,
    (state: CommentsState) => state.error
);
