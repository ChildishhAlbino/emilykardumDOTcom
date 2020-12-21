import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

class ContactPage extends React.Component {
  state = { ...this.props }
  render() {
    return (
      <Layout>
        <SEO title="Contact Me!"></SEO>
        <main>
          <h1>This is a Contact page.</h1>
        </main>
      </Layout >
    )
  }
}

export default ContactPage
