import { createAction,props } from "@ngrx/store";
import { Answer } from "src/app/interfaces/answer.interface";

export const loadAnswers = createAction(
    '[Answer] Load Answers',
);

export const loadAnswersSuccess = createAction(
    '[Answer] Load Answers Success',
    props<{answers: Answer[]}>()
);

export const loadAnswersFailure = createAction(
    '[Answer] Load Answers Failure',
    props<{error: any}>()
);


