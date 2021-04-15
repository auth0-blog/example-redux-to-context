import PropTypes from 'prop-types'

import Money from 'components/money'

const Summary = ({ price }) => (
  <ul className="boxed">
    <li>Total</li>
    <li>
      <Money amount={price} />
    </li>
  </ul>
)

Summary.propTypes = {
  price: PropTypes.string.isRequired,
}

export default Summary
