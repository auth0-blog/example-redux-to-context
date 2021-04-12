import styled from 'styled-components'
import './App.css'

const Section = styled.section`
  display: grid;
  grid-template-areas: 'header header' 'products cart';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  gap: 15px;
`

const Products = styled.section`
  grid-area: products;
  padding: 1rem;
`

const Cart = styled.section`
  grid-area: cart;
  padding: 1rem;
`

const Header = styled.header`
  grid-area: header;
  border-bottom: 1px solid #222;
  padding: 1rem;
`

const App = () => {
  return (
    <Section>
      <Header>Shopping Cart</Header>
      <Products>
        <h2>Product List</h2>
      </Products>
      <Cart>
        <h2>Cart</h2>
      </Cart>
    </Section>
  )
}

export default App
