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

          <div className="about">

            <p>This is an about section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec molestie ante. Sed fringilla, nulla at pellentesque lacinia, sem ex aliquam massa, a varius enim dolor eget nisi. Mauris efficitur eros vitae lorem placerat imperdiet. Aliquam ultricies, tellus nec bibendum consectetur, metus ex rutrum ante, ac scelerisque ipsum ligula sed neque. Pellentesque sollicitudin lacinia diam a volutpat. Duis sollicitudin interdum laoreet. Fusce lobortis, magna in tempor facilisis, ligula nisl efficitur sem, ac commodo felis dolor vitae sapien.</p>
          </div>
          <h2>
            Gaming, Technology, and Entertainment
          </h2>
          <ArticleBar articles={gamingArticles}></ArticleBar>

          <h2>
            Politics & Current Affairs
          </h2>
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