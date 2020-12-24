
import React from 'react';
import Layout from '../layout/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../seo/seo'
import { Link, graphql } from "gatsby"
import { DateTime } from "luxon";

class Article extends React.Component {
  render() {
    let { contentfulArticle } = this.props.data
    let { title, subtitle, publicationDate, body, seo: { tags }, thumbnail } = contentfulArticle
    let { raw } = body
    let parsed = JSON.parse(raw)
    let imageUrl = thumbnail ? `http:${thumbnail.fluid.src}` : null
    let joinedTags = tags.join(', ')
    let keywords = [
      {
        name: `keywords`,
        content: joinedTags,
      }
    ]
    let formattedDate = DateTime.fromISO(publicationDate).setZone("local").toFormat("FFFF")
    return (
      <Layout>
        <SEO
          title={title}
          description={subtitle}
          meta={keywords}
          imageUrl={imageUrl}
        >
        </SEO>
        <main>
          <article>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <i>{formattedDate}</i>
            <hr></hr>
            <section>{documentToReactComponents(parsed)}</section>
          </article>
        </main>
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
      thumbnail {
          fluid (maxWidth: 2048) {
            ...GatsbyContentfulFluid
          }
        }
    }
  }
`
