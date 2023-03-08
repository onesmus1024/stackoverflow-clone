import { createAction, props } from "@ngrx/store";

import { Question } from "src/app/interfaces/question.interface";
import { QuestionVote } from "src/app/interfaces/questionVote.interface";

export const loadQuestions = createAction(
    '[Questions] Load Questions'
);


export const loadQuestionsSuccess = createAction(
    '[Questions] Load Questions Success',
    props<{ questions: Question[] }>()
);

export const loadQuestionsFailure = createAction(
    '[Questions] Load Questions Failure',
    (error: any) => ({ error })
);

export const addQuestion = createAction(
    '[Questions] Add Question',
    (question: Question) => ({ question })
);

export const upvoteQuestion = createAction(
    '[Questions] Upvote Question',
    props<{ questionId: string, userId: string }>()
);


