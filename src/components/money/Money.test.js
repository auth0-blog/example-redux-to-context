import { render, screen } from '@testing-library/react'

import Money from './Money'

describe('Money', () => {
  it('formats money correctly', async () => {
    render(<Money amount={'24.932'} />)

    await screen.findByText('24,93 €')
  })
})
