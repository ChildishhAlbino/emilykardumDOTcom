/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
    const { site, seoIcon } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        seoIcon: contentfulAsset(title: {eq: "SEO_ICON"}) {
            contentful_id
            file {
            url
            fileName
            }
        }
      }
    `
    )
    let seoIconURL = `http:${seoIcon.file.url}`
    const metaDescription = description || site.siteMetadata.description
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: seoIconURL
                },
                {
                    property: `twitter:card`,
                    content: `summary`,
                },
                {
                    property: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    property: `twitter:title`,
                    content: title,
                },
                {
                    property: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: `twitter:image`,
                    content: seoIconURL
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO
