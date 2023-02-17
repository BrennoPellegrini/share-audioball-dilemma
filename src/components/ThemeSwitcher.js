import React, { useState, useEffect } from 'react'

import { Theme, useTheme } from '../contexts'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme()
  const targetTheme = theme === Theme.Light ? Theme.Dark : Theme.Light

  const [animating, setAnimating] = useState(false)
  const animatingClass = animating ? 'theme-switchert-animation' : ''

  const toggleTheme = () => {
    setTheme(targetTheme)
    setAnimating(true)
  }

  useEffect(() => {
    const animate = setTimeout(() => setAnimating(false), 1100)

    return () => {
      clearTimeout(animate)
    }
  }, [animating])

  return (
        <button
          className="z-3 left-button"
          onClick={toggleTheme}>Change theme color
        </button>
  )
}

export default ThemeSwitcher
