import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

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
            <Product key={product.name} {...product} />
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
}

export default connect(
  (state) => state.products,
  (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
  })
)(Products)
