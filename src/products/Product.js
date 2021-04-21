import PropTypes from 'prop-types'
import cx from 'classnames'

import Money from 'components/money'

import styles from './Product.module.css'

const Product = ({ name, price, image, onAdd, onRemove }) => (
  <div className={styles.product}>
    <h3>{name}</h3>
    <img className={styles.image} src={image} alt={name}></img>
    <span>
      <Money amount={price} />
    </span>
    <span className={cx(styles.button, styles.blue)} onClick={onAdd}>
      Add
    </span>
    <span className={cx(styles.button, styles.pink)} onClick={onRemove}>
      Remove
    </span>
  </div>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Product
