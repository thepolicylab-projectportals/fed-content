const staticText = require("./language.json")

module.exports = {
  siteMetadata: {
    title: "Quinetucket Project Portal",
  },
  plugins: [
    {
      resolve: `@thepolicylab-projectportals/gatsby-theme-project-portal`,
      options: {
        pages: [
          { name: staticText.open.pageName, link: "/", show: true },
          {
            name: staticText.ongoing.pageName,
            link: "/ongoing",
            show: true,
          },
          {
            name: staticText.completed.pageName,
            link: "/completed",
            show: true,
          },
          {
            name: "About",
            link: "/about",
            show: true,
          },
          { name: "Contact", link: "/contact", show: true },
        ],
        tailwindConfig: require("./tailwind.config"),
        staticText: staticText,
        showDevBanner: true,
        faviconPath: `${__dirname}/content/theme-image/favicon.png`,
      },
    },
    `@thepolicylab-projectportals/project-portal-content-netlify`,
    `gatsby-plugin-netlify`,
  ],
}
