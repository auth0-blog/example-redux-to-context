import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import Cart from './Cart'

import configureStore from 'configure-store'

describe('Cart', () => {
  it('renders cart', async () => {
    render(
      <Provider store={configureStore()}>
        <Cart />
      </Provider>
    )

    await screen.findByText('Name')
    await screen.findByText('Quantity')
    await screen.findByText('Price')
  })
})
