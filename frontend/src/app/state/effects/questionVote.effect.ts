import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { QuestionVote } from "src/app/interfaces/questionVote.interface";
import { QuestionVoteService } from "../../services/questionVote/question-vote.service";
import * as questionVoteActions from "../actions/questionVote.actions";



@Injectable()
export class QuestionVoteEffects {

    constructor(private actions$: Actions, private questionVoteService: QuestionVoteService) { }

    loadQuestionVotes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(questionVoteActions.loadQuestionVotes),
            mergeMap(() =>
                this.questionVoteService.getQuestionVotes().pipe(
                    map((questionVotes: QuestionVote[]) => questionVoteActions.loadQuestionVotesSuccess({ questionVotes })),
                    catchError(async (error) => questionVoteActions.loadQuestionVotesFailure({ error }))
                )
            )
        )
    );
}


