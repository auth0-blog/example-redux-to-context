import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Heading from './Heading'
import Item from './Item'
import Summary from './Summary'

import { fullCartSelector, totalSelector } from './selectors'

import styles from './Cart.module.css'

const Cart = ({ cart, total }) => {
  return (
    <>
      <h2>Cart</h2>
      <section className={styles.table} data-testid="cart">
        <Heading boxed></Heading>
        {cart.map((item) => (
          <Item key={item.name} {...item}></Item>
        ))}
        <Summary boxed price={total}></Summary>
      </section>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
  total: PropTypes.string.isRequired,
}

export default connect((state) =>
  createStructuredSelector({
    cart: fullCartSelector,
    total: totalSelector,
  })(state)
)(Cart)
