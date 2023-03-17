import { createAction, props } from "@ngrx/store";
import { Comment } from "src/app/interfaces/comment.interface";


export const loadComments = createAction(
    '[Comment] Load Comments',
);

export const loadCommentsSuccess = createAction(
    '[Comment] Load Comments Success',
    props<{comments: Comment[]}>()
);


export const loadCommentsFailure = createAction(
    '[Comment] Load Comments Failure',
    props<{error: any}>()
);
