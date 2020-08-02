module.exports = {
  siteMetadata: {
    title: "I'm Dominick Lee",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
  ],
  pathPrefix: '/domogami.github.io',
}
