module.exports = {
  siteMetadata: {
    title: `Blog by fpigeonjr`,
    name: `Frank Pigeon`,
    siteUrl: `https://frankpigeon.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `just another blog about linux, music, open source, and life`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/fpigeonjr`
      },
      {
        name: `github`,
        url: `https://github.com/fpigeonjr`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/fpigeonjr`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/fpigeonjr/`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
}
