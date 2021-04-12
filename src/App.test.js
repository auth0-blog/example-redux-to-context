import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main application', async () => {
    render(<App />)

    await screen.findByText('Shopping Cart')
    await screen.findByText('Product List')
    await screen.findByText('Cart')
  })
})
