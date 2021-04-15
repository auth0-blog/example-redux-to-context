import { render, screen } from '@testing-library/react'

import Products from './Products'

import ProductsProvider from 'productsProvider'
import CartProvider from 'cartProvider'

describe('Products', () => {
  it('renders the list of products', async () => {
    render(
      <ProductsProvider>
        <CartProvider>
          <Products />
        </CartProvider>
      </ProductsProvider>
    )

    await screen.findByText('Chair')
    await screen.findByText('24,95 €')
    await screen.findAllByText('Add')
    await screen.findAllByText('Remove')
  })
})
