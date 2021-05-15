import { combineReducers } from 'redux'

import { authReducer } from './auth/authReducer'
import { feedReducer } from './feed/feedReducer'
import { tagsReducer } from './tags/tagsReducer'

export const rootReducer = combineReducers({
  user: authReducer,
  feed: feedReducer,
  tags: tagsReducer
})

export type RootState = ReturnType<typeof rootReducer>
