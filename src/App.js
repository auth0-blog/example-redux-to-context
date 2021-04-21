import './App.css'

import Header from 'header'
import Products from 'products'
import Cart from 'cart'

import styles from './App.module.css'

const App = () => {
  return (
    <section className={styles.section}>
      <Header />
      <section className={styles.products}>
        <Products></Products>
      </section>

      <section className={styles.cart}>
        <Cart></Cart>
      </section>
    </section>
  )
}

export default App
