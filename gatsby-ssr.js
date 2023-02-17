const React = require('react')
const Layout = require('./src/components/layout').default

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/font/SFProDisplay-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SF Pro"
    />,
  ])
  
}