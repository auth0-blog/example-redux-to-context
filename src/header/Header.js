import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  grid-area: header;
  border-bottom: 1px solid #222;
  padding: 1rem;

  color: ${(props) => props.foreground};
  background-color: ${(props) => props.background};
`

const Heading = styled.h1`
  flex: 1;
  margin: 0;
`

const Header = ({ foreground, background }) => {
  return (
    <StyledHeader foreground={foreground} background={background}>
      <Heading>Shopping Cart</Heading>
      <span>Foreground: {foreground}</span>
    </StyledHeader>
  )
}

Header.propTypes = {
  foreground: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default connect((state) => state.theme)(Header)
