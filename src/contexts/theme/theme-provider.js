import React, { useEffect, useState } from 'react'
import { isBrowser } from '../../utils/is-browser'

import { Theme, ThemeContext } from './theme-context'

const ThemeProvider = ({ children }) => {
  const defaultTheme = getFavoriteTheme() || getPreferredTheme()
  const [theme, setTheme] = useState(defaultTheme)

  document.body.classList.add(theme);

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const setUserTheme = (value) => {
    setTheme(value)
    setFavoriteTheme(value)
  }

  useEffect(() => {
    const onChangeFavoriteTheme = () => {
      const favoriteTheme = getFavoriteTheme()

      setTheme(favoriteTheme)
    }

    window.addEventListener('storage', onChangeFavoriteTheme)
    return () => {
      window.removeEventListener('storage', onChangeFavoriteTheme)
    }
  }, [])

  useEffect(() => {
    const onChangePreferredTheme = () => {
      const favoriteTheme = getFavoriteTheme()
      const preferredTheme = getPreferredTheme()

      if (!favoriteTheme) {
        setTheme(preferredTheme)
      }
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onChangePreferredTheme)
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onChangePreferredTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={[theme, setUserTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

function getPreferredTheme() {
  if (!isBrowser) return

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.Dark
    : Theme.Light
}

function getFavoriteTheme() {
  if (!isBrowser) return

  return window.localStorage.getItem('theme')
}

function setFavoriteTheme(theme) {
  if (!isBrowser) return

  window.localStorage.setItem('theme', theme)
}

export { ThemeProvider }
