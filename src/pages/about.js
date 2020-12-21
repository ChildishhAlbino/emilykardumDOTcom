import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

class AboutPage extends React.Component {
  state = { ...this.props }
  render() {
    return (
      <Layout>
        <SEO title="About Me!"></SEO>
        <main>
          <h1>This is a About Me page.</h1>
        </main>
      </Layout >
    )
  }
}

export default AboutPage
