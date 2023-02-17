import * as React from "react"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <main id="error-page">
      <h1>404</h1>
      <p>Sorry, we couldn’t find what you were looking for.</p>
      <Link to="/">
        Go back to home
      </Link>
  </main>
)

export default NotFoundPage
