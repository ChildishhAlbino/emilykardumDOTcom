/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Emily Kardum`,
    author: `Emily Kardum`,
    description: `Gaming and Politics Journalism by Emily Kardum.`,
    siteUrl: `https://www.emilykardum.com`,
    social: {
      twitter: `friedeggily`,
    },

    /* Your site config here */
    plugins: [

      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `w8ij9u2tems4`,
          accessToken: process.env.CONTENTFUL_API_TOKEN,
        }
      }
    ],
  }
}
