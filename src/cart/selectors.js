import { createSelector } from 'reselect'

const enrich = (item, products) => {
  const product = products.find((e) => e.name === item.name)
  const price = (parseFloat(product.price) * item.quantity).toString()
  return { ...item, price }
}

export const fullCartSelector = createSelector(
  (state) => state.products.products,
  (state) => state.cart.cart,
  (products, cart) => cart.map((item) => enrich(item, products))
)

const sum = (cart) => {
  const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0)
  return total.toString()
}

export const totalSelector = createSelector(fullCartSelector, (cart) =>
  sum(cart)
)
