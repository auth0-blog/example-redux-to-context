import styled from 'styled-components'
import { useState } from 'react'

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
`

const Button = styled.span`
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  margin-left: 0.3rem;
  padding: 0.3rem;

  color: ${(props) => props.background};
  background-color: ${(props) => props.foreground};
`

const Header = () => {
  const [theme, setTheme] = useState({
    foreground: 'black',
    background: 'white',
  })
  const { foreground, background } = theme
  const toggle = () =>
    setTheme({ foreground: background, background: foreground })

  return (
    <StyledHeader foreground={foreground} background={background}>
      <Heading>Shopping Cart</Heading>
      <span>Foreground: {foreground}</span>
      <Button
        foreground={foreground}
        background={background}
        onClick={() => toggle()}
      >
        Toggle
      </Button>
    </StyledHeader>
  )
}

export default Header
