import produce from 'immer'
import { FETCH_PRODUCTS } from './actions'

const products = []

export const initialState = {
  products,
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      draft.products = action.payload
      break
    default:
      break
  }
}, initialState)

export default reducer
