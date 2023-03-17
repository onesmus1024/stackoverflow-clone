import { AnswerVotesState } from "../reducers/answerVote.redicer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AnswerVote } from "src/app/interfaces/answerVote.interface";


export const selectAnswerVotesState = createFeatureSelector<AnswerVotesState>('answerVotes');



export const selectAnswerVotes = createSelector(
    selectAnswerVotesState,
    (state: AnswerVotesState) => state.answerVotes
);



export const selectAnswerVotesLoading = createSelector(
    selectAnswerVotesState,
    (state: AnswerVotesState) => state.loading
);



export const selectAnswerVotesError = createSelector(
    selectAnswerVotesState,
    (state: AnswerVotesState) => state.error
);


