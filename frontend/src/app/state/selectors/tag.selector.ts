import { TagsState } from "../reducers/tags.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Tag } from "src/app/interfaces/tag.interface";


export const selectTagsState = createFeatureSelector<TagsState>('tags');


export const selectTags = createSelector(
    selectTagsState,
    (state: TagsState) => state.tags
);


export const selectTagsLoading = createSelector(
    selectTagsState,
    (state: TagsState) => state.loading
);


export const selectTagsError = createSelector(

    selectTagsState,
    (state: TagsState) => state.error
);
