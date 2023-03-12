import { createReducer,on } from "@ngrx/store";
import * as TagsActions from '../actions/tags.actions';

import { Tag } from "src/app/interfaces/tag.interface";


export interface TagsState {
    tags: Tag[];
    loading: boolean;
    error: any;
}


export const initialState: TagsState = {
    tags: [],
    loading: false,
    error: null
};


export const tagsReducer = createReducer(
    initialState,
    on(TagsActions.loadTags, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(TagsActions.loadTagsSuccess, (state, { tags }) => {
        return {
            ...state,
            loading: false,
            tags: [...tags]
        }
    }

    ),
    on(TagsActions.loadTagsError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    )
);
