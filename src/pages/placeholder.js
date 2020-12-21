import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

class PlaceholderPage extends React.Component {
  state = { ...this.props }
  render() {
    return (
      <Layout>
        <SEO title="Placeholder!"></SEO>
        <main>
          <h1>This is a placeholder page.</h1>
        </main>
      </Layout >
    )
  }
}

export default PlaceholderPage
