import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Snake from '../components/Snake'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Gatsby Default Starter" />
    <h1>Hello，World</h1>
    <Link to="/blog/">
      <h1>Go to blog</h1>
    </Link>

  </Layout>
)

export default IndexPage
