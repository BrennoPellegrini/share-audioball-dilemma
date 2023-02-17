import { useMemo, useCallback, useState, useEffect } from 'react'

import { isBrowser } from '../../utils/is-browser'

const useAudio = (src, props) => {
  const audio = useMemo(() => isBrowser && new Audio(src), [src])
  useEffect(() => {
    if (!audio) return

    for (const prop in props) {
      audio[prop] = props[prop]
    }
  }, [audio])

  const [paused, setPaused] = useState(true)

  const pause = useCallback(() => audio.pause(), [audio])
  const play = useCallback(() => audio.play(), [audio])

  useEffect(() => {
    const onPause = () => setPaused(true)
    const onPlay = () => setPaused(false)

    audio.addEventListener('pause', onPause)
    audio.addEventListener('play', onPlay)

    return () => {
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('play', onPlay)
    }
  }, [audio])

  return {
    paused,
    pause,
    play
  }
}

export { useAudio }
