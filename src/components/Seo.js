import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useTheme } from '../contexts'

function Seo({ description, title, image, children }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
            image
            twitterUsername
          }
        }
      }
    `
  )
  
  const pageTitle = title ? title : site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const pageImage = image ? image : site.siteMetadata.image

  return (
    <>
      <html lang="en"></html>
      {/* <body className={theme}></body> */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={pageImage} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:image" content={pageImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image"/>
      {children}
    </>
  )
}

export default Seo
