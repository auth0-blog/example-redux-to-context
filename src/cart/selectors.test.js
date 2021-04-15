import { fullCartSelector, fullCart, totalSelector, total } from './selectors'

const products = [
  {
    name: 'Chair',
    price: '24.95',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Couch',
    price: '195.34',
    image: 'https://via.placeholder.com/128',
  },
]

const cart = [
  {
    name: 'Chair',
    quantity: 2,
  },
  {
    name: 'Couch',
    quantity: 1,
  },
  {
    name: 'Stool',
    quantity: 0,
  },
]

const state = {
  products: {
    products,
  },
  cart: {
    cart,
  },
}

describe('selectors', () => {
  describe('fullCartSelector', () => {
    it('enhances the cart', () => {
      const result = fullCartSelector(state)
      expect(result).toEqual([
        { name: 'Chair', quantity: 2, price: '49.9' },
        { name: 'Couch', quantity: 1, price: '195.34' },
      ])
    })
  })

  describe('fullCart', () => {
    it('enhances the cart', () => {
      const result = fullCart(products, cart)
      expect(result).toEqual([
        { name: 'Chair', quantity: 2, price: '49.9' },
        { name: 'Couch', quantity: 1, price: '195.34' },
      ])
    })
  })

  describe('totalSelector', () => {
    it('computes the total price', () => {
      expect(totalSelector(state)).toEqual('245.24')
    })
  })

  describe('total', () => {
    it('computes the total price', () => {
      expect(total(products, cart)).toEqual('245.24')
    })
  })
})
