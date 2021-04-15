import produce from 'immer'

import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'

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

const remove = (cart, name) => {
  let item = cart.find((elem) => elem.name === name)

  if (!item) {
    return
  }

  item.quantity -= 1
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = findOrAdd(draft.cart, action.payload)
      item.quantity += 1
      break
    case REMOVE_FROM_CART:
      remove(draft.cart, action.payload)
      break
    default:
      break
  }
}, initialState)

export default reducer
