const layoutConfig = require(`${__dirname}/content/config/layout.json`)

module.exports = {
  siteMetadata: {
    title: "Evaluation.gov Project Portal",
  },
  plugins: [
    {
      resolve: `@thepolicylab-projectportals/gatsby-theme-project-portal`,
      options: {
        pages: layoutConfig.navbar.pages,
        tailwindConfig: require("./tailwind.config"),
        staticText: layoutConfig,
        showDevBanner: true,
        faviconPath: `${__dirname}/content/theme-image/favicon.png`,
      },
    },
    `@thepolicylab-projectportals/project-portal-content-netlify`,
    `gatsby-plugin-netlify`,
  ],
}
