import * as React from "react"
import Seo from '../components/Seo'

import AudioBallLazy from '../components/AudioBallLazy'

export const Head = () => (
  <Seo></Seo>
)

const IndexPage = () => (
  <>
    <AudioBallLazy />
  </>
)

export default IndexPage
