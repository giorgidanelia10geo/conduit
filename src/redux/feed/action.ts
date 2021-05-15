import { Dispatch } from "redux"

import * as api from '../../api'
import { FeedActionTypes } from "./feedActionTypes"

export const getFeed = (url: string) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getFeeds(url)
      dispatch({
        type: FeedActionTypes.GET_FEED_SUCCESS,
        feed: data
      })
  } catch (error) {
     dispatch({
      type: FeedActionTypes.GET_FEED_FAILURE,
      error: error.message,
    })
  }
}

