import produce from 'immer'

const cart = []
export const initialState = { cart }

const reducer = produce((draft, action) => {
  switch (action.type) {
    default:
      break
  }
}, initialState)

export default reducer
