import styled from 'styled-components'

import Heading from './Heading'
import Item from './Item'
import Summary from './Summary'

import { fullCart, total } from './selectors'
import { useCart } from 'cartProvider'
import { useProducts } from 'productsProvider'

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

const Cart = () => {
  const products = useProducts()
  const { cart } = useCart()

  const extendedCart = fullCart(products, cart)
  const price = total(products, cart)

  return (
    <>
      <h2>Cart</h2>
      <Table data-testid="cart">
        <Heading boxed></Heading>
        {extendedCart.map((item) => (
          <Item key={item.name} {...item}></Item>
        ))}
        <Summary boxed price={price}></Summary>
      </Table>
    </>
  )
}

export default Cart
