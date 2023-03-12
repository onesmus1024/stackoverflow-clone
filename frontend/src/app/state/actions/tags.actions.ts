import { createAction, props } from "@ngrx/store";
import { Tag } from "src/app/interfaces/tag.interface";

export const loadTags = createAction(
    "[Tags] Load Tags"
);

export const loadTagsSuccess = createAction(
    "[Tags] Load Tags Success",

    props<{ tags: Tag[] }>()
);

export const loadTagsError = createAction(
    "[Tags] Load Tags Error",

    props<{ error: any }>()
);