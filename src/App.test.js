import { render, screen, within } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'

import App from './App'

import configureStore from 'configure-store'

describe('App', () => {
  it('renders the main application', async () => {
    render(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )

    await screen.findByText('Shopping Cart')
    await screen.findByText('Product List')
    await screen.findByText('Cart')
  })

  it('can add products to the cart', async () => {
    render(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )

    userEvent.click(screen.getAllByText('Add')[0])
    userEvent.click(screen.getAllByText('Add')[0])
    userEvent.click(screen.getAllByText('Add')[1])

    await within(screen.getByTestId('cart')).findByText('Chair')
    await within(screen.getByTestId('cart')).findByText('Couch')

    await within(screen.getByTestId('cart')).findByText('49,90 €')
    await within(screen.getByTestId('cart')).findByText('245,24 €')

    userEvent.click(screen.getAllByText('Remove')[0])

    await within(screen.getByTestId('cart')).findByText('220,29 €')
  })
})
