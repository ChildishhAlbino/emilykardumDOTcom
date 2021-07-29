import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'
import { graphql } from "gatsby"
import ArticleBar from "../components/article-bar/article-bar"
import Bio from "../components/bio/bio"
class IndexPage extends React.Component {
  state = { ...this.props }
  render() {
    const { data } = this.props
    let { politics, gaming } = data;

    let gamingArticles = gaming.edges.map((node) => { return { ...node.node } })
    let politicsArticles = politics.edges.map((node) => { return { ...node.node } })

    return (
      <Layout>
        <SEO title="Home"></SEO>
        <main>
          <Bio />
          <hr></hr>
          <h3>
            Gaming, Technology, and Entertainment
          </h3>
          <ArticleBar articles={gamingArticles}></ArticleBar>
          <hr />
          <h3>
            Politics & Current Affairs
          </h3>
          <ArticleBar articles={politicsArticles}></ArticleBar>
        </main>
      </Layout >
    )

  }
}

export default IndexPage

export const pageQuery = graphql`
{
  politics: allContentfulArticle(filter: {category: {eq: "politics/current-affairs"}}, sort: {fields: publicationDate, order: ASC}, limit: 12) {
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
  gaming: allContentfulArticle(filter: {category: {eq: "gaming/technology/entertainment"}}, sort: {fields: publicationDate, order: ASC}, limit: 12) {
    edges {
      node {
        id
        slug
        category
        publicationDate
        title
        subtitle
        thumbnail {
          fluid (maxHeight: 315, toFormat: WEBP) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`