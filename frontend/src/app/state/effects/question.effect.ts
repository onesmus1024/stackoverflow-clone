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

    addAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.addAnswer),
        mergeMap((action) => this.questionService.addAnswer(action.answer).pipe(
            map(answer => QuestionsActions.addAnswerSuccess(answer )),
            catchError(error => of(QuestionsActions.addAnswerFailure({ error })))
        )),
    ));

    addComment$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.addComment),
        mergeMap((action) => this.questionService.addComment(action.comment).pipe(
            map(comment => QuestionsActions.addCommentSuccess(comment )),
            catchError(error => of(QuestionsActions.addCommentFailure({ error })))
        )),
    ));

    addQuestionVote$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.addQuestionVote),
        mergeMap((action) => this.questionService.voteQuestion(action.questionVote).pipe(
            map(questionVote => QuestionsActions.addQuestionVoteSuccess(questionVote )),
            catchError(error => of(QuestionsActions.addQuestionVoteFailure({ error })))
        )),
    ));

    addAnswerVote$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.addAnswerVote),
        mergeMap((action) => this.questionService.voteAnswer(action.answerVote).pipe(
            map(answerVote => QuestionsActions.addAnswerVoteSuccess(answerVote )),
            catchError(error => of(QuestionsActions.addAnswerVoteFailure({ error })))
        )),
    ));

    updateAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.updateAnswer),
        mergeMap((action) => this.questionService.updateAnswer(action.answer).pipe(
            map(answer => QuestionsActions.updateAnswerSuccess(answer )),
            catchError(error => of(QuestionsActions.updateAnswerFailure({ error })))
        )),
    ));

    deleteAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.deleteAnswer),
        mergeMap((action) => this.questionService.deleteAnswer(action.answer).pipe(
            map(answer => QuestionsActions.deleteAnswerSuccess(answer )),
            catchError(error => of(QuestionsActions.deleteAnswerFailure({ error })))
        )),
    ));

    deleteQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.deleteQuestion),
        mergeMap((action) => this.questionService.deleteQuestion(action.question).pipe(
            map(question => QuestionsActions.deleteQuestionSuccess(question )),
            catchError(error => of(QuestionsActions.deleteQuestionFailure({ error })))
        )),
    ));




   
    

 



}

