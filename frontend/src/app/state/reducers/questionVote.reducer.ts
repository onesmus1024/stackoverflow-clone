import { createReducer,on } from "@ngrx/store";
import * as QuestionVoteActions from "../actions/questionVote.actions";
import { QuestionVote } from "src/app/interfaces/questionVote.interface";


export interface QuestionVotesState {
    questionVotes: QuestionVote[];
    loading: boolean;
    error: any;
}

export const initialState: QuestionVotesState = {
    questionVotes: [],
    loading: false,
    error: null
};


export const questionVotesReducer = createReducer(
    initialState,
    on(QuestionVoteActions.loadQuestionVotes, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(QuestionVoteActions.loadQuestionVotesSuccess, (state, { questionVotes }) => {
        return {
            ...state,
            loading: false,
            questionVotes: [...questionVotes]
        }
    }   
    ),
    on(QuestionVoteActions.loadQuestionVotesFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }

    )
);