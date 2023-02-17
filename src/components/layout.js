import * as React from "react"

import ThemeAudioBar from './ThemeAudioBar'

const Layout = ({ children, location }) => {

  return (
    <>
        <ThemeAudioBar />

        <main>{children}</main>
    </>
  )
}

export default Layout