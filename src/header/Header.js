import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { toggleAction } from './actions'

import styles from './Header.module.css'

const Header = ({ foreground, background, toggle }) => {
  return (
    <header
      className={cx(
        styles.header,
        styles[foreground],
        styles[`${background}-bg`]
      )}
    >
      <h1 className={styles.heading}>Shopping Cart</h1>
      <span>Foreground: {foreground}</span>
      <span
        className={cx(
          styles.button,
          styles.header,
          styles[background],
          styles[`${foreground}-bg`]
        )}
        onClick={() => toggle()}
      >
        Toggle
      </span>
    </header>
  )
}

Header.propTypes = {
  foreground: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default connect(
  (state) => state.theme,
  (dispatch) => ({
    toggle: () => dispatch(toggleAction()),
  })
)(Header)
