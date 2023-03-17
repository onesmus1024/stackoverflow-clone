import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AnswerService } from "../../services/answer/answer.service";
import * as answerActions from "../actions/answer.actions";


@Injectable()
export class AnswerEffects {
    constructor(private actions$: Actions, private answerService: AnswerService) {}

    loadAnswers$ = createEffect(() =>
        this.actions$.pipe(
        ofType(answerActions.loadAnswers),
        mergeMap(() =>
            this.answerService.getAnswers().pipe(
            map((answers) => answerActions.loadAnswersSuccess({ answers })),
            catchError(async (error) => answerActions.loadAnswersFailure({ error }))
            )
        )
        )
    );
    }