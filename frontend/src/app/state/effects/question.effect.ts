import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { QuestionService } from "../../services/question.service";
import * as QuestionsActions from "../actions/questions.actions";
import { of } from "rxjs";

@Injectable()
export class QuestionEffects {

    constructor(
        private actions$: Actions,
        private questionService: QuestionService
    ) { }

    loadQuestions$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.loadQuestions),
        // add page and pageSize to the action
        mergeMap((action) => this.questionService.getQuestions(action.page, action.pageSize).pipe(
            map(questions => QuestionsActions.loadQuestionsSuccess({ questions })),
            catchError(error => of(QuestionsActions.loadQuestionsFailure({ error })))
        )),
    ));

    addQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.addQuestion),
        mergeMap((action) => this.questionService.addQuestion(action.question).pipe(
            map(question => QuestionsActions.addQuestionSuccess(question )),
            catchError(error => of(QuestionsActions.addQuestionFailure({ error })))
        )),
    ));

   
    

 



}

