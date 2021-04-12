import produce from 'immer'
import { TOGGLE_ACTION } from './actions'

export const initialState = {
  foreground: 'black',
  background: 'white',
}

const theme = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_ACTION:
      const tmp = draft.foreground
      draft.foreground = draft.background
      draft.background = tmp
      break
    default:
      break
  }
}, initialState)

export default theme
