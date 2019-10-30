/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
        plugins: [`gatsby-remark-images`],
      },
    },
  ],
};
