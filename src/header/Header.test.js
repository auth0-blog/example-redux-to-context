import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the header', async () => {
    render(<Header />)

    await screen.findByText('Shopping Cart')
  })
})
