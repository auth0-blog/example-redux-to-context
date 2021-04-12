import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = (initialState = {}) => {
  return createStore(
    combineReducers({}),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default store
