import { createAction, props } from "@ngrx/store";
import { AnswerVote } from "src/app/interfaces/answerVote.interface";



export const loadAnswerVotes = createAction(
    '[AnswerVote] Load AnswerVotes',
);


export const loadAnswerVotesSuccess = createAction(
    '[AnswerVote] Load AnswerVotes Success',
    props<{answerVotes: AnswerVote[]}>()
);


export const loadAnswerVotesFailure = createAction(
    '[AnswerVote] Load AnswerVotes Failure',
    props<{error: any}>()
);
