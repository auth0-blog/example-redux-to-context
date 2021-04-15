import PropTypes from 'prop-types'

const format = (amount) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    amount
  )

const Money = ({ amount }) => <>{format(amount)}</>

Money.propTypes = {
  amount: PropTypes.string.isRequired,
}

export default Money
