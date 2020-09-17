const { readFileSync } = require('fs');
const yaml = require('js-yaml');

module.exports = {
  siteMetadata: yaml.safeLoad(readFileSync(`${__dirname}/metadata.yaml`)),
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'research',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-codegen',
      options: {
        output: `${__dirname}/src/types/graphql.d.ts`,
        outputFlat: true,
      },
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['IBM Plex Sans'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
