import React from 'react'

import Product from './Product'
import { useProducts } from 'productsProvider'
import { useCart } from 'cartProvider'

import styles from './Products.module.css'

const Products = () => {
  const products = useProducts()
  const { addToCart, removeFromCart } = useCart()
  return (
    <>
      <h2>Product List</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <Product
            key={product.name}
            {...product}
            onAdd={() => addToCart(product.name)}
            onRemove={() => removeFromCart(product.name)}
          />
        ))}
      </ul>
    </>
  )
}

export default Products
