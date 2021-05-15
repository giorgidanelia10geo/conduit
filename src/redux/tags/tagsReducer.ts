import { TagsActionTypes } from "./tagsActionTypes"
import { Action, IGetTagsState } from "./types"

const initialState: IGetTagsState = {
  isLoggedIn: true,
  data: null
}

export const tagsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TagsActionTypes.GET_TAGS:
      return {...state}
    case TagsActionTypes.GET_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.tags
      }
    case TagsActionTypes.GET_TAGS_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return {
      ...state
    }
  }
}