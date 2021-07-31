import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'

class PortfolioPage extends React.Component {
  state = { ...this.props }
  render() {
    return (
      <Layout>
        <SEO title="Portfolio!"></SEO>
        <main>
        <br></br><br></br><br></br>
          <h1>Portfolio of Work</h1>
        </main>
      </Layout >
    )
  }
}

export default PortfolioPage
