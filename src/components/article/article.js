import React from 'react';
import Layout from '../layout/layout';
import SEO from '../seo/seo'
import { Link, graphql } from "gatsby"
import { DateTime } from "luxon";
import MdxContent from '../mdx-content/mdx-content';

class Article extends React.Component {

  generateSeo(seo, seoThumbnail) {
    let tags = seo.tags ? seo.tags : []
    let seoImageUrl = seoThumbnail ? `http:${seoThumbnail.fluid.src}` : null
    let joinedTags = tags.join(', ')
    let keywords = [
      {
        name: `keywords`,
        content: joinedTags,
      }
    ]
    return { keywords, seoImageUrl }
  }

  render() {
    let { contentfulArticle } = this.props.data
    let { title, subtitle, publicationDate, seo, postThumbnail, seoThumbnail, content } = contentfulArticle
    const { keywords, seoImageUrl } = this.generateSeo(seo, seoThumbnail)
    let formattedDate = DateTime.fromISO(publicationDate).setZone("local").toFormat("FFFF")
    return (
      <Layout>
        <SEO
          title={title}
          description={subtitle}
          meta={keywords}
          imageUrl={seoImageUrl}
          path={this.props.path}
        >
        </SEO>
        <main>
          <article>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <i>{formattedDate}</i>
            <hr></hr>
            <section>
              <MdxContent content={content.childMdx} />
            </section>
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
      seo{
        tags
      }
      content {
          childMdx {
            body
          }
        }
      postThumbnail: thumbnail {
          fluid (maxWidth: 2048) {
            ...GatsbyContentfulFluid
          }
        }
      seoThumbnail: thumbnail {
          fluid (maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
    }
  }
`
