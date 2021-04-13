import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer as themeReducer } from 'header'
import { reducer as productsReducer } from 'products'

const store = (initialState = {}) => {
  return createStore(
    combineReducers({ theme: themeReducer, products: productsReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default store
