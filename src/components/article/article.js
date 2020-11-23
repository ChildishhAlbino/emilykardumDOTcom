
import React from 'react';
import Layout from '../layout/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../seo/seo'
import { Link, graphql } from "gatsby"


class Article extends React.Component {
  render() {
    let { site, contentfulArticle } = this.props.data
    let { title, subtitle, publicationDate, body, seo: { tags } } = contentfulArticle
    let { raw } = body
    let parsed = JSON.parse(raw)

    let keywords = [
      {
        name: `keywords`,
        content: tags
      }
    ]
    console.log(keywords)
    return (
      <Layout>
        <SEO
          title={title}
          description={subtitle}
          meta={keywords}
        >
        </SEO>
        <article>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <i>{publicationDate}</i>
          <hr></hr>
          <section>{documentToReactComponents(parsed)}</section>
        </article>
        <Link to="/">Back to Home Page</Link>
      </Layout >
    )
  }
}

export default Article;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArticle(slug: { eq: $slug }) {
      category
      id
      publicationDate
      subtitle
      title
      body {
        raw
      }
      seo{
        tags
      }
    }
  }
`
