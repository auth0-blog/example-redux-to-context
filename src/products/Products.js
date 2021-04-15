import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addToCartAction, removeFromCartAction } from 'cart'
import { fetchProducts } from './actions'
import Product from './Product'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

class Products extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <>
        <h2>Product List</h2>
        <List>
          {this.props.products.map((product) => (
            <Product
              key={product.name}
              {...product}
              onAdd={() => this.props.addToCartAction(product.name)}
              onRemove={() => this.props.removeFromCartAction(product.name)}
            />
          ))}
        </List>
      </>
    )
  }
}

Products.propTypes = {
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
)(Products)
