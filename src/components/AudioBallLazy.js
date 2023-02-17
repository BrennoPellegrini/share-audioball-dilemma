import React, { useState, useEffect, Suspense, lazy } from 'react'

const AudioBall = lazy(() => import('./AudioBall'))

const AudioBallLazy = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {!isMounted || navigator?.connection?.saveData ? null : (
        <Suspense fallback={null}>
          <AudioBall />
        </Suspense>
      )}
    </>
  )
}

export default AudioBallLazy
