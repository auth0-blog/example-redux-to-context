import React from 'react'
import styled from 'styled-components'

import Product from './Product'
import { useProducts } from 'productsProvider'
import { useCart } from 'cartProvider'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Products = () => {
  const products = useProducts()
  const { addToCart, removeFromCart } = useCart()
  return (
    <>
      <h2>Product List</h2>
      <List>
        {products.map((product) => (
          <Product
            key={product.name}
            {...product}
            onAdd={() => addToCart(product.name)}
            onRemove={() => removeFromCart(product.name)}
          />
        ))}
      </List>
    </>
  )
}

export default Products
