import styled from 'styled-components'

const StyledHeader = styled.header`
  grid-area: header;
  border-bottom: 1px solid #222;
  padding: 1rem;
`

const Header = () => {
  return <StyledHeader>Shopping Cart</StyledHeader>
}

export default Header
