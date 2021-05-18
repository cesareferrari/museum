const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetExhibits {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(exhibit => {
    const {
      id,
      frontmatter: { slug },
    } = exhibit

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/exhibit.js`),
      context: { id },
    })
  })
}
