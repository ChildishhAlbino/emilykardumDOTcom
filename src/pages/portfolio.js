import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'
import ArticleCard from "../components/article-card/article-card"


class PortfolioPage extends React.Component {
  state = { ...this.props }
  render() {
    console.log(this.state)
    return (
      <Layout>
        <SEO title="Portfolio!"></SEO>
        <h1>Portfolio of Work</h1>
        <main className="portfolio-page-container">
          {this.state.data.items.edges.map(({ node }) => {
            return (
              <ArticleCard article={node} />
            )
          })}
        </main>
      </Layout >
    )
  }
}

export default PortfolioPage

export const pageQuery = graphql`
{
  items: allContentfulArticle(sort: {fields: publicationDate, order: DESC}, limit: 12) {
    edges {
      node {
        id
        slug
        category
        publicationDate
        title
        subtitle
        thumbnail {
          fluid(maxHeight: 315, toFormat: WEBP) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`