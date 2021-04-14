import PropTypes from 'prop-types'

const Summary = ({ price }) => (
  <ul className="boxed">
    <li>Total</li>
    <li>{price}€</li>
  </ul>
)

Summary.propTypes = {
  price: PropTypes.string.isRequired,
}

export default Summary
