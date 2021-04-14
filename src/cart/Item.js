import PropTypes from 'prop-types'

const Item = ({ name, quantity, price }) => (
  <ul>
    <li>{name}</li>
    <li>{quantity}</li>
    <li>{price}€</li>
  </ul>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
}

export default Item
