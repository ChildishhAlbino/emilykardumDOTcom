const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const articleTemplate = path.resolve(`./src/components/article/article.js`)
    const result = await graphql(
        `
      {
        allContentfulArticle {
            edges {
                node {
                    slug
                }
            }
            totalCount
        }
    }
    `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulArticle.edges

    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        console.log(post.slug)
        createPage({
            path: post.node.slug,
            component: articleTemplate,
            context: {
                slug: post.node.slug,
                previous,
                next,
            },
        })
    })
}