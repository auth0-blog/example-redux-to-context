import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ThemeProvider from 'themeProvider'
import Header from './Header'

describe('Header', () => {
  it('renders the header', async () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    )

    await screen.findByText('Shopping Cart')
    await screen.findByText('Foreground: black')

    userEvent.click(screen.getByText('Toggle'))

    await screen.findByText('Foreground: white')
  })
})
