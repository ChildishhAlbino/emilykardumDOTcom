/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config()

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://emily-kardum.netlify.app/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-advanced-sitemap`
  ],
  siteMetadata: {
    title: `Emily Kardum`,
    author: `Emily Kardum`,
    description: `Gaming and Politics Journalism by Emily Kardum.`,
    siteUrl: `https://emily-kardum.netlify.app/`,
    social: {
      twitter: `friedeggily`,
    }
  }
}
