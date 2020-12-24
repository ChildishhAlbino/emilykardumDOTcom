import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'
import { graphql } from "gatsby"
import Carousel from "../components/carousel/carousel"
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
          <h1>Hi! I'm Emily.</h1>
          <section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe corrupti fuga! Quae ducimus dolore voluptate soluta expedita sequi fugit? Delectus aperiam libero magni perferendis cumque consectetur dicta facilis magnam incidunt, architecto earum neque aut nam eum quisquam debitis laboriosam ab rerum laudantium ut! Repellendus maiores quibusdam nobis sed doloremque!
            </p>
          </section>
          <Carousel
            items={gamingArticles}
            renderNavBar={true}
            title={"Gaming, Technology, and Entertainment"}
          />
          <Carousel
            items={politicsArticles}
            renderNavBar={true}
            title={"Politics & Current Affairs"}
          />
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