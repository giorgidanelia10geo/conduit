import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import { rootReducer } from './rootReducer'

const middleware = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware, thunk)))

export const myStore = () => {
  return {store}
}


