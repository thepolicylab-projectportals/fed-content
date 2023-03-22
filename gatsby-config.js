const {
  loadProjectPortalThemeOptions,
} = require("@thepolicylab-projectportals/project-portal-content-netlify/utils/theme-options")
const { siteMetadata, themeOptions } = loadProjectPortalThemeOptions()

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `@thepolicylab-projectportals/gatsby-theme-project-portal`,
      options: {
        ...themeOptions,
        tailwindConfig: require("./tailwind.config"),
        faviconPath: `${__dirname}/content/theme-image/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
        options: {
         cssLoaderOptions: {
             esModule: false,
               modules: {
                 namedExport: false,
                 },
           },
       },
    },
    `@thepolicylab-projectportals/project-portal-content-netlify`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,

  ],
}
