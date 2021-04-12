import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
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
})
