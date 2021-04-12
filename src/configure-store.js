import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer as themeReducer } from 'header'

const store = (initialState = {}) => {
  return createStore(
    combineReducers({ theme: themeReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default store
