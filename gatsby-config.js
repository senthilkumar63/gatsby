/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Webpage Using Gatsby`,
    author: `Senthil Kumar`
  },
  plugins: [ 
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: `iwSV_hXUK6oerNaJPEts8hG08K7Emoubc9H4OPrhzfs`,
        spaceId: `ga2iyys119hd`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
   ]
};
