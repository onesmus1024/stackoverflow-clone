import { QuestionVotesState } from "../reducers/questionVote.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionVote } from "src/app/interfaces/questionVote.interface";


export const selectQuestionVotesState = createFeatureSelector<QuestionVotesState>('questionVotes');


export const selectQuestionVotes = createSelector(
    selectQuestionVotesState,
    (state: QuestionVotesState) => state.questionVotes
);


export const selectQuestionVotesLoading = createSelector(
    selectQuestionVotesState,
    (state: QuestionVotesState) => state.loading
);


export const selectQuestionVotesError = createSelector(
    selectQuestionVotesState,
    (state: QuestionVotesState) => state.error
);

