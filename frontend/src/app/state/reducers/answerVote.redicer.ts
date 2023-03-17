import { createReducer,on } from "@ngrx/store";
import * as AnswerVoteActions from "../actions/answerVote.actions";
import { AnswerVote } from "src/app/interfaces/answerVote.interface";




export interface AnswerVotesState {
    answerVotes: AnswerVote[];
    loading: boolean;
    error: any;
}

export const initialState: AnswerVotesState = {
    answerVotes: [],
    loading: false,
    error: null
};


export const answerVotesReducer = createReducer(
    initialState,
    on(AnswerVoteActions.loadAnswerVotes, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(AnswerVoteActions.loadAnswerVotesSuccess, (state, { answerVotes }) => {
        return {
            ...state,
            loading: false,
            answerVotes: [...answerVotes]
        }
    }
    ),
    on(AnswerVoteActions.loadAnswerVotesFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    )
);

