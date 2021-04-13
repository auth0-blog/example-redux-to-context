import reducer from './reducer'
import { fetchProductsAction } from './actions'

describe('theme reducer', () => {
  const products = [
    {
      name: 'Chair',
      price: '24.95',
      image: 'https://via.placeholder.com/128',
    },
  ]

  it('adds products', () => {
    const state = reducer({ products: [] }, fetchProductsAction(products))
    expect(state).toEqual({
      products,
    })
  })
})
