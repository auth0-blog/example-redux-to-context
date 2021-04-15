import React, { useContext } from 'react'
import { useAsync } from 'react-use'

import { fetchProducts } from './fetchProducts'

const Context = React.createContext([])

const ProductsProvider = ({ children }) => {
  const state = useAsync(fetchProducts, [])

  if (state.loading) {
    return <>Loading...</>
  }

  if (state.error) {
    return <>Error!</>
  }

  return <Context.Provider value={state.value}>{children}</Context.Provider>
}

export const useProducts = () => useContext(Context)

export default ProductsProvider
