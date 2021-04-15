import { render, screen } from '@testing-library/react'

import Cart from './Cart'

import ProductsProvider from 'productsProvider'
import CartProvider from 'cartProvider'

describe('Cart', () => {
  it('renders cart', async () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <Cart />
        </CartProvider>
      </ProductsProvider>
    )

    await screen.findByText('Name')
    await screen.findByText('Quantity')
    await screen.findByText('Price')
  })
})
