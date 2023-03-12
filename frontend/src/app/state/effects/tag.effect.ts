import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

import { TagService } from "src/app/services/tag.service";
import * as tagsActions from "../actions/tags.actions";

@Injectable()
export class TagsEffects {
    constructor(private actions$: Actions, private tagService: TagService) {}
    
    loadTags$ = createEffect(() =>
        this.actions$.pipe(
        ofType(tagsActions.loadTags),
        mergeMap(() =>
            this.tagService.getTags().pipe(
            map((tags) => tagsActions.loadTagsSuccess({ tags })),
            catchError(async (error) => tagsActions.loadTagsError({ error }))
            )
        )
        )
    );
    }