import Heading from './Heading'
import Item from './Item'
import Summary from './Summary'

import { fullCart, total } from './selectors'
import { useCart } from 'cartProvider'
import { useProducts } from 'productsProvider'
import { useMemo } from 'react'

import styles from './Cart.module.css'

const Cart = () => {
  const products = useProducts()
  const { cart } = useCart()

  const extendedCart = useMemo(() => fullCart(products, cart), [products, cart])
  const price = useMemo(() => total(products, cart), [products, cart])

  return (
    <>
      <h2>Cart</h2>
      <section className={styles.table} data-testid="cart">
        <Heading boxed></Heading>
        {extendedCart.map((item) => (
          <Item key={item.name} {...item}></Item>
        ))}
        <Summary boxed price={price}></Summary>
      </section>
    </>
  )
}

export default Cart
