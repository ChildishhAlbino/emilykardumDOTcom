/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w8ij9u2tems4`,
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `emilykardum.com`,
        short_name: `ek.com`,
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#1b1b1b`,
        display: `standalone`,
        icon: `static/emily.svg`
      },
    },
  ],
  siteMetadata: {
    title: `Emily Kardum`,
    author: `Emily Kardum`,
    description: `Gaming and Politics Journalism by Emily Kardum.`,
    siteUrl: `https://emily-kardum.netlify.app`,
    social: {
      twitter: `friedeggily`,
    }
  }
}
