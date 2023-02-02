const path = require("path")

// Get the `main` file listed in the theme's package.json.
// This should (hopefully) find the right directory with node_modules,
// as well as with the yarn berry unpacking approach.
const themeMainFile = require.resolve(
  `@thepolicylab-projectportals/gatsby-theme-project-portal`
)

// Get the path to the theme's directory, without a trailing slash
const themeDirectory = path.dirname(themeMainFile)

module.exports = {
  presets: [
    require("@thepolicylab-projectportals/gatsby-theme-project-portal/src/styles/tailwind.presets"),
  ],
  content: [
    // The theme components
    themeDirectory + "/src/**/*.{js,jsx,ts,tsx,html}",
    // The local src components
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#edf3ec",
        bottombanner: "#ffffff",
        footer: "#eef3ec",
        footertext: "#194009",
        primary: "#186d00",
        primarydark: "#174009",
        topics: "#82e773",
      },
    },
  },
}
