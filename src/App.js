import styled from 'styled-components'
import './App.css'

import ThemeProvider from 'themeProvider'
import Header from 'header'
import Products from 'products'
import Cart from 'cart'
import ProductsProvider from 'productsProvider'
import CartProvider from 'cartProvider'

const Section = styled.section`
  display: grid;
  grid-template-areas: 'header header' 'products cart';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  gap: 15px;
`

const ProductsWrapper = styled.section`
  grid-area: products;
  padding: 1rem;
`

const CartWrapper = styled.section`
  grid-area: cart;
  padding: 1rem;
`

const App = () => {
  return (
    <ThemeProvider>
      <Section>
        <ProductsProvider>
          <CartProvider>
            <Header />
            <ProductsWrapper>
              <Products></Products>
            </ProductsWrapper>

            <CartWrapper>
              <Cart></Cart>
            </CartWrapper>
          </CartProvider>
        </ProductsProvider>
      </Section>
    </ThemeProvider>
  )
}

export default App
