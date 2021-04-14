import produce from 'immer'

import { ADD_TO_CART } from './actions'

const cart = []
export const initialState = { cart }

const findOrAdd = (cart, name) => {
  let item = cart.find((elem) => elem.name === name)

  if (item) {
    return item
  }

  item = { name, quantity: 0 }
  cart.push(item)
  return item
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = findOrAdd(draft.cart, action.payload)
      item.quantity += 1
      break
    default:
      break
  }
}, initialState)

export default reducer
