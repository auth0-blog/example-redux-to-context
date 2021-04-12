import reducer, { initialState } from './reducer'
import { toggleAction } from './actions'

describe('theme reducer', () => {
  it('toggles the theme', () => {
    const state = reducer(initialState, toggleAction())
    expect(state).toEqual({
      foreground: 'white',
      background: 'black',
    })
  })
})
