import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'
import { Link, graphql } from "gatsby"

class IndexPage extends React.Component {

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
          <h1>Gaming, Technology, and Entertainment</h1>
          <section>
            <div>
              <Link to={gamingArticles[0].slug}><h2>{gamingArticles[0].title}</h2></Link>
              <h3>{gamingArticles[0].subtitle}</h3>
            </div>
          </section>
          <h1>Politics & Current Affairs</h1>
          <section>
            <div>
              <Link to={politicsArticles[0].slug}><h2>{politicsArticles[0].title}</h2></Link>
              <h3>{politicsArticles[0].subtitle}</h3>
            </div>
          </section>
        </main>
      </Layout >
    )

  }
}

export default IndexPage

export const pageQuery = graphql`
{
    politics: allContentfulArticle(filter: {category: {eq: "politics/current-affairs"}}) {
    edges {
      node {
        slug
        category
        publicationDate
        title
        subtitle
      }
    }
  }
  gaming: allContentfulArticle(filter: {category: {eq: "gaming/technology/entertainment"}}) {
    edges {
      node {
        slug
        category
        publicationDate
        title
        subtitle
      }
    }
  }
}
`