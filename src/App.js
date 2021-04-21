import './App.css'

import ThemeProvider from 'themeProvider'
import Header from 'header'
import Products from 'products'
import Cart from 'cart'
import ProductsProvider from 'productsProvider'
import CartProvider from 'cartProvider'

import styles from './App.module.css'

const App = () => {
  return (
    <ThemeProvider>
      <section className={styles.section}>
        <ProductsProvider>
          <CartProvider>
            <Header />
            <section className={styles.products}>
              <Products></Products>
            </section>

            <section className={styles.cart}>
              <Cart></Cart>
            </section>
          </CartProvider>
        </ProductsProvider>
      </section>
    </ThemeProvider>
  )
}

export default App
