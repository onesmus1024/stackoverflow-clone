import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as CommentActions from "../actions/comment.actions";
import { CommentService } from "../../services/comment/comment.service";


@Injectable()
export class CommentEffects {
    constructor(private actions$: Actions, private commentService: CommentService) {}
    
    loadComments$ = createEffect(() =>
        this.actions$.pipe(
        ofType(CommentActions.loadComments),
        mergeMap(() =>
            this.commentService.getComments().pipe(
            map((comments) => CommentActions.loadCommentsSuccess({ comments })),
            catchError(async (error) => CommentActions.loadCommentsFailure({ error }))
            )
        )
        )
    );
    }

