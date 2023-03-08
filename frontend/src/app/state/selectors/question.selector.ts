
import { QuestionsState } from "../reducers/questions.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Question } from "src/app/interfaces/question.interface";


export const selectQuestionsState = createFeatureSelector<QuestionsState>('questions');


export const selectQuestions = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.questions
);

export const selectQuestionsLoading = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.loading
);

export const selectQuestionsError = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.error
);

