import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import Products from './Products'

import configureStore from 'configure-store'

describe('Products', () => {
  it('renders the list of products', async () => {
    render(
      <Provider store={configureStore()}>
        <Products />
      </Provider>
    )

    await screen.findByText('Chair')
    await screen.findByText('24.95€')
    await screen.findAllByText('Add')
  })
})
