import { Action, IFeedState } from "./types"
import {FeedActionTypes}  from './feedActionTypes'

const initialState: IFeedState = {
  isLoading: true,
  error: null,
  data: null,
}

export const feedReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FeedActionTypes.GET_FEED:
      return {
        ...state,
        isLoading: false
       }
    case FeedActionTypes.GET_FEED_SUCCESS:
      return {
        ...state,
        isLoading: true,
        data: action.feed,
      }
    case FeedActionTypes.GET_FEED_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default: return state
  }
}