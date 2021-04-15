import React, { useContext, useState } from 'react'

const Context = React.createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    foreground: 'black',
    background: 'white',
  })
  const { foreground, background } = theme
  const toggle = () =>
    setTheme({ foreground: background, background: foreground })

  return (
    <Context.Provider value={{ theme, toggle }}>{children}</Context.Provider>
  )
}

export const useTheme = () => useContext(Context)

export default ThemeProvider
