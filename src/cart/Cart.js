import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Heading from './Heading'
import Item from './Item'
import Summary from './Summary'

const Table = styled.section`
  margin-top: 1rem;

  & ul {
    display: flex;
    margin-bottom: 0.8rem;
    padding: 0.4rem;
  }

  & ul.boxed {
    border: 1px solid #ccc;
  }

  & li:first-child {
    flex-grow: 1;
  }

  & li:not(:first-child) {
    flex: 20% 0;
    margin-left: 1rem;
    text-align: right;
  }
`

const Cart = ({ cart }) => {
  return (
    <>
      <h2>Cart</h2>
      <Table data-testid="cart">
        <Heading boxed></Heading>
        {cart.map((item) => (
          <Item key={item.name} {...item}></Item>
        ))}
        <Summary boxed price="333"></Summary>
      </Table>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
}

export default connect((state) => state.cart)(Cart)
