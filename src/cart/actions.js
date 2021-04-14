export const ADD_TO_CART = 'cart:add'
export const REMOVE_FROM_CART = 'cart:remove'

export const addToCartAction = (productName) => ({
  type: ADD_TO_CART,
  payload: productName,
})

export const removeFromCartAction = (productName) => ({
  type: REMOVE_FROM_CART,
  payload: productName,
})
