module.exports = {
  siteMetadata: {
    title: "I'm Dominick Lee",
    author: `@Domogami`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    // "gatsby-plugin-manifest",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     icon: "src/images/favicon.png",
    //   },
    // },
  ],
};
