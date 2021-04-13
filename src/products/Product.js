import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProduct = styled.div`
  display: flex;
  flex: 44%;
  flex-direction: column;
  align-items: center;

  border: 1px solid #f8f8f8;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);

  margin: 0.4rem;
  padding: 0.4rem;
`

const Image = styled.img`
  width: 128px;
  margin: 0.3rem 0;
`

const Product = ({ name, price, image }) => (
  <StyledProduct>
    <h3>{name}</h3>
    <Image src={image} alt={name}></Image>
    <span>{price}€</span>
  </StyledProduct>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Product
