import { useTheme } from 'themeProvider'
import cx from 'classnames'

import styles from './Header.module.css'

const Header = () => {
  const { theme, toggle } = useTheme()
  const { foreground, background } = theme

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

export default Header
