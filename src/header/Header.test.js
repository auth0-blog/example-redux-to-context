import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from './Header'

import configureStore from 'configure-store'

describe('Header', () => {
  it('renders the header', async () => {
    render(
      <Provider store={configureStore()}>
        <Header />
      </Provider>
    )

    await screen.findByText('Shopping Cart')
    await screen.findByText('Foreground: black')
  })
})
