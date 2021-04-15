import PropTypes from 'prop-types'

import Money from 'components/money'

const Item = ({ name, quantity, price }) => (
  <ul>
    <li>{name}</li>
    <li>{quantity}</li>
    <li>
      <Money amount={price} />
    </li>
  </ul>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
}

export default Item
