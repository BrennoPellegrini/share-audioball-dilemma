module.exports = {
  siteMetadata: {
    title: '▲ Brenno Pellegrini ▲ Full stack designer based in Italy ▲',
    description: `Hi, I’m Brenno Pellegrini, a full-stack designer based in Italy. I have been working as a product designer in this industry since March 2019, and I love designing and validating digital products of every kind by crafting them in an easy and functional way.`,
    siteUrl: 'https://www.brennopellegrini.com/',
    author: `Brenno Pellegrini`,
    image: '/home-cover.jpg',
    twitterUsername: '@brenno63190689',
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-netlify',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        fastHash: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brenno Pellegrini`,
        start_url: `/`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
