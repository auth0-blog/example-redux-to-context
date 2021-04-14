import reducer, { initialState } from './reducer'
import { addToCartAction } from './actions'

describe('cart reducer', () => {
  it('adds product to cart', () => {
    const action = addToCartAction('Couch')
    const state = reducer(reducer(initialState, action), action)
    const cart = [{ name: 'Couch', quantity: 2 }]
    expect(state).toEqual({
      cart,
    })
  })

  it('adds second product to cart', () => {
    const action = addToCartAction('Couch')
    const state = reducer(
      reducer(initialState, action),
      addToCartAction('Table')
    )
    const cart = [
      { name: 'Couch', quantity: 1 },
      { name: 'Table', quantity: 1 },
    ]
    expect(state).toEqual({
      cart,
    })
  })
})
