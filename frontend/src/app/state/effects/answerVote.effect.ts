import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AnswerVote } from "src/app/interfaces/answerVote.interface";
import { AnswerVoteService } from "../../services/answerVote/answer-vote.service";
import * as answerVoteActions from "../actions/answerVote.actions";


@Injectable()
export class AnswerVoteEffects {
    
        constructor(private actions$: Actions, private answerVoteService: AnswerVoteService) {}
    
        loadAnswerVotes$ = createEffect(() =>
            this.actions$.pipe(
            ofType(answerVoteActions.loadAnswerVotes),
            mergeMap(() =>
                this.answerVoteService.getAnswerVotes().pipe(
                map((answerVotes: AnswerVote[]) => answerVoteActions.loadAnswerVotesSuccess({ answerVotes })),
                catchError(async (error) => answerVoteActions.loadAnswerVotesFailure({ error }))
                )
            )
            )
        );
        }