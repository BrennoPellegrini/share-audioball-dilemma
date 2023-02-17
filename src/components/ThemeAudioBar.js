import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import AudioWave from './AudioWave'

const ThemeAudioBar = () => {
  return (
    <div className='theme-audio-bar'>
      <ThemeSwitcher />
      <AudioWave />
    </div>
  )
}

export default ThemeAudioBar
