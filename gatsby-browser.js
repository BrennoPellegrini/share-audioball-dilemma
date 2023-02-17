import React from 'react'

import './src/styles/index.scss'

import Layout from './src/components/layout'
import { ThemeProvider } from './src/contexts'

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
  
const wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider>{element}</ThemeProvider>
    </>
  )
}

export { wrapPageElement, wrapRootElement }