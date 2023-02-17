import { createContext } from 'react'

const Theme = {
  Dark: 'dark',
  Light: 'light'
}

const ThemeContext = createContext([Theme.Dark, () => {}])

export { Theme, ThemeContext }
