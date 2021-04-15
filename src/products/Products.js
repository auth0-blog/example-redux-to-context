import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addToCartAction, removeFromCartAction } from 'cart'
import { fetchProducts } from './actions'
import Product from './Product'
import { useProducts } from 'productsProvider'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

class ProductsWrapper extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <Products
        addToCartAction={this.props.addToCartAction}
        removeFromCartAction={this.props.removeFromCartAction}
      />
    )
  }
}

const Products = ({ addToCartAction, removeFromCartAction }) => {
  const products = useProducts()
  return (
    <>
      <h2>Product List</h2>
      <List>
        {products.map((product) => (
          <Product
            key={product.name}
            {...product}
            onAdd={() => addToCartAction(product.name)}
            onRemove={() => removeFromCartAction(product.name)}
          />
        ))}
      </List>
    </>
  )
}

ProductsWrapper.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  fetchProducts: PropTypes.func.isRequired,
  addToCartAction: PropTypes.func.isRequired,
  removeFromCartAction: PropTypes.func.isRequired,
}

export default connect(
  (state) => state.products,
  (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    addToCartAction: (productName) => dispatch(addToCartAction(productName)),
    removeFromCartAction: (productName) =>
      dispatch(removeFromCartAction(productName)),
  })
)(ProductsWrapper)
