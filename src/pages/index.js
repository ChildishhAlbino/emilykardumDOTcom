import React from "react"
import Layout from "../components/layout/layout"
import SEO from '../components/seo/seo'
import 

export default function Home() {
  return (
    <Layout>
      <SEO title="Home"></SEO>
      <article>
        <h1>Hi! I'm Emily.</h1>
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe corrupti fuga! Quae ducimus dolore voluptate soluta expedita sequi fugit? Delectus aperiam libero magni perferendis cumque consectetur dicta facilis magnam incidunt, architecto earum neque aut nam eum quisquam debitis laboriosam ab rerum laudantium ut! Repellendus maiores quibusdam nobis sed doloremque!
          </p>
        </section>
        <h1>Gaming, Technology, and Entertainment</h1>
        <section>
          put a carousel here
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe corrupti fuga! Quae ducimus dolore voluptate soluta expedita sequi fugit? Delectus aperiam libero magni perferendis cumque consectetur dicta facilis magnam incidunt, architecto earum neque aut nam eum quisquam debitis laboriosam ab rerum laudantium ut! Repellendus maiores quibusdam nobis sed doloremque!
          </p>
        </section>
        <h1>Politics & Current Affairs</h1>
        <section>
          another carousel here
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe corrupti fuga! Quae ducimus dolore voluptate soluta expedita sequi fugit? Delectus aperiam libero magni perferendis cumque consectetur dicta facilis magnam incidunt, architecto earum neque aut nam eum quisquam debitis laboriosam ab rerum laudantium ut! Repellendus maiores quibusdam nobis sed doloremque!
          </p>
        </section>
      </article>
    </Layout>
  )
}


const pageQuery = graphql`
{
    politics: allContentfulArticle(filter: {category: {eq: "gaming/technology/entertainment"}}) {
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