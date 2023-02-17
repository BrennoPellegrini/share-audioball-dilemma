import React from 'react'

import soundtrack from '../audio/soundtrack.mp3'
import { useAudio } from '../hooks'

const AudioWave = () => {
  const { paused, play, pause } = useAudio(soundtrack, {
    autoplay: true,
    loop: true
  })

  const toggle = paused ? play : pause

  return (
    <button className='z-3 right-button' onClick={() => toggle()}>Audio: {paused ? 'off' : 'on' } </button>
  )
}

export default AudioWave
