import  {createReducer, on}  from   '@ngrx/store' ;
import * as CommentsActions from '../actions/comment.actions';
import { Comment } from 'src/app/interfaces/comment.interface';


export interface CommentsState {
    comments: Comment[];
    loading: boolean;
    error: any;
}

export const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null
};

export const commentsReducer = createReducer(
    initialState,
    on(CommentsActions.loadComments, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(CommentsActions.loadCommentsSuccess, (state, { comments }) => {
        return {
            ...state,
            loading: false,
            comments: [...comments]
        }
    }
    ),
    on(CommentsActions.loadCommentsFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    )
);
