exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type StripeProduct implements Node {
        slug: String!
    }
    `)
}

const slugify = require("slugify")
const slugifyoptions = {
  replacement: "-",
  lower: true,
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    StripeProduct: {
      slug: {
        resolve: source => slugify(source.name, slugifyoptions),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const products = (
    await graphql(`
      {
        allStripeProduct {
          nodes {
            slug
            id
            name
          }
        }
      }
    `)
  ).data.allStripeProoduct.nodes

  products.forEach(product => {
    actions.createPages({
      path: `products/${product.slug}`,
      component: require.resolve("./src/templates/product.jsx"),
      context: {
        id: product.id,
      },
    })
  })
}
