import { Dispatch } from "redux"

import * as api from '../../api'
import { TagsActionTypes } from './tagsActionTypes'

export const getTag = () => {
  return async (dispatch: Dispatch) => {
    try {
      const {data}: any = await api.getTags()
      dispatch({
        type: TagsActionTypes.GET_TAGS_SUCCESS,
        tags: data
      })
    } catch (error) {
      console.log(error)
      dispatch({type: TagsActionTypes.GET_TAGS_FAILURE})
    }
  }
}