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

function SEO({ description, lang, meta, title, imageUrl, path }) {
    const { site, seoIcon } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        seoIcon: contentfulAsset(title: {eq: "SEO_ICON"}) {
            contentful_id
            fluid(maxWidth: 500) {
                src
            }
        }
      }
    `
    )
    let pageUrl = site.siteMetadata.siteUrl + path
    let seoIconURL = imageUrl ? imageUrl : `http:${seoIcon.fluid.src}`
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
                    property: `og:url`,
                    content: pageUrl,
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
                {
                    property: `author`,
                    content: site.siteMetadata.author
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    imgUrl: null,
    path: "",
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    path: PropTypes.string
}

export default SEO
