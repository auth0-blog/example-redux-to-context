import React, { useContext } from 'react'
import { useImmer } from 'use-immer'

const Context = React.createContext([])

const CartProvider = ({ children }) => {
  const [cart, updateCart] = useImmer([])
  const addToCart = (productName) => {
    updateCart((draft) => {
      let item = draft.find((elem) => elem.name === productName)

      if (item) {
        item.quantity += 1
        return
      }

      item = { name: productName, quantity: 0 }
      draft.push(item)
    })
  }
  const removeFromCart = (productName) => {
    updateCart((draft) => {
      let item = draft.find((elem) => elem.name === productName)

      if (item) {
        item.quantity -= 1
      }
    })
  }

  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  )
}

export const useCart = () => useContext(Context)

export default CartProvider
