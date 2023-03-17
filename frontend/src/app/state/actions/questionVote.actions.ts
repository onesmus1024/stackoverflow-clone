import { createAction,props } from "@ngrx/store";
import { QuestionVote } from "src/app/interfaces/questionVote.interface";


export const loadQuestionVotes = createAction(
    '[QuestionVote] Load QuestionVotes',
);

export const loadQuestionVotesSuccess = createAction(
    '[QuestionVote] Load QuestionVotes Success',
    props<{questionVotes: QuestionVote[]}>()
);


export const loadQuestionVotesFailure = createAction(
    '[QuestionVote] Load QuestionVotes Failure',
    props<{error: any}>()
);