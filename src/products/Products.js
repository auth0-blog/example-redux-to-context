import React from 'react'
import styled from 'styled-components'

import Product from './Product'

const products = [
  {
    name: 'Chair',
    price: '24.95',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Couch',
    price: '195.34',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Bed',
    price: '200',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Stool',
    price: '35.5',
    image: 'https://via.placeholder.com/128',
  },
]

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

class Products extends React.Component {
  render() {
    return (
      <>
        <h2>Product List</h2>
        <List>
          {products.map((product) => (
            <Product key={product.name} {...product} />
          ))}
        </List>
      </>
    )
  }
}

export default Products
